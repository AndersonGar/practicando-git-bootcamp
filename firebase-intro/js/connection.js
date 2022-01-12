$(document).ready(function () {
    $("#registro").hide();
    $("#content").hide();

    $("#btn-register").click(function () {
        $("#login-container").hide();
        $("#registro").show();
    })

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyC5M4r-pJV6aySYAE6RIkNw3S2fA6RdPl8",
        authDomain: "proyecto-bootcamp-unicef1.firebaseapp.com",
        projectId: "proyecto-bootcamp-unicef1",
        storageBucket: "proyecto-bootcamp-unicef1.appspot.com",
        messagingSenderId: "986710597091",
        appId: "1:986710597091:web:0b6e062440c159ebe5d4d6",
        measurementId: "G-YWSYXTEW5K"
    };

    //Inicializar firebase
    firebase.initializeApp(firebaseConfig);

    //Inicializar servicio de autenticación
    const auth = firebase.auth();

    //Login o inicio de sesión
    $("#btn-login").click(function (e) {
        e.preventDefault();
        //Variables de inputs
        var correo = $("#mail").val();
        var clave = $("#pass").val();
        //Usar servicio de login de firebase
        auth
            .signInWithEmailAndPassword(correo, clave)
            .then(userCredential => {
                alert("Datos correctos");
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert("Código:" + errorCode + ". Mensaje: " + errorMessage);
            })
    })

    //Singup o crear cuenta    
    $("#btn-singup").click(function (e) {
        e.preventDefault();
        //Variables de inputs
        var correo = $("#mail-new").val();
        var clave = $("#pass-new").val();

        //Usar servicio de firebase para crear cuenta
        auth
            .createUserWithEmailAndPassword(correo, clave)
            .then((userCredential) => {
                alert("Cuenta creada");
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert("Código:" + errorCode + ". Mensaje: " + errorMessage);
            })
    })

    // Desconexion de Usuarios
    // Boton LogOut
    $("#btn-logout").click(function (e) {
        e.preventDefault();
        auth.signOut().then(() => {
            alert("Sesión cerrada");
        })
    })

    var provider_fb = new firebase.auth.FacebookAuthProvider();
    //Iniciar sesión con Facebook
    $("#btn-login-facebook").click(function (e) {
        e.preventDefault();
        auth.signInWithPopup(provider_fb)
            .then(result => {
                alert("Ingreso con Facebook");
            })
            .catch(error => {
                alert(error);
            })
    })

    var provider = new firebase.auth.GoogleAuthProvider();
    //Iniciar sesión con Google
    $("#btn-login-google").click(function (e) {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result => {
                alert("Ingreso con Google");
            })
            .catch(error => {
                alert(error);
            })
    })

    auth.onAuthStateChanged((user) => {
        if (user) {
            //Sesión iniciada
            $("#login-container").hide();
            $("#register").hide();
            $("#content").show();
            readPosts();
        }
        else {
            //Sesión finalizada
            $("#content").hide();
            $("#login-container").show();
        }
    })

    //Inicializar servicio de la bd Firestore
    const db = firebase.firestore();
    //Publicar un nuevo estado
    $("#btn-publish").click(function(e){
        e.preventDefault();
        let postText = $("#status-text").val();
        let date = new Date();
        db.collection("posts").add({
            post: postText,
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        })
        .then((docRef)=>{
            alert("Estado publicado");
            $("#status-text").val('');
            readPosts();
        })
        .catch((error) =>{
            alert(error);
        })
    })

    function readPosts(){
        db.collection("posts").get().then((posts)=>{
            listPosts(posts.docs);
        })
    }

    function listPosts(data){
        var divContent = $("#post-feed");
        divContent.empty(); 
        if(data.length > 0){
            let content = "";
            data.forEach(document => {
                let doc = document.data();
                const divPost = `
                    <div style='border:solid 2px;'>
                        <p>${doc.post}</p><br>
                        <textarea style='display: none;'></textarea>
                        <button data-id="${document.id}" style='display: none;'>Guardar</button>
                        <span>Publicado el: ${doc.day}/${doc.month}/${doc.year}</span>
                        <button data-id="${document.id}" class="btn btn-warning btn-edit-post">Editar</button>
                        <button data-id="${document.id}" class="btn btn-danger btn-delete-post">Eliminar</button>
                    </div>
                    <hr>
                `;
                content += divPost;
            });
            divContent.append(content);
            //Agregar listener a btn-delete
            const btnDelete = document.querySelectorAll(".btn-delete-post");
            btnDelete.forEach(btn=>{
                btn.addEventListener("click",(e)=>{
                    const id = e.target.dataset.id;
                    DeletePost(id);
                })
            })
            const btnEdit = document.querySelectorAll(".btn-edit-post");
            btnEdit.forEach(btn=>{
                btn.addEventListener("click",(e)=>{
                    const id = e.target.dataset.id;
                    OpenEdit(id,btn);
                })
            })
        }
    }

    function OpenEdit(id,button){
        let parent = button.parentNode;
        let textEdit = $(parent).children().eq(2);
        let btnEdit = $(parent).children().eq(3);
        textEdit.show();
        btnEdit.show();
        btnEdit.on("click",function(e){
            SaveUpdate(e,id,textEdit.val())
        });
    }

    function DeletePost(id){
        db.collection("posts").doc(id).delete().then(() => {
            alert("Se ha eliminado correctamente");
            readPosts();
        }).catch((error) => {
            console.error("Detalle del Error: ", error);
        });
    }


    function SaveUpdate(e,id_post,text_new){
        e.preventDefault();
        db.collection("posts").doc(id_post).update({
            post: text_new,
        }).then(()=>{
            alert("Post actualizado");
            readPosts();
        })
        .catch((error)=>{
            alert("Error:",error);
        })
    }


})