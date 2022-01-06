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
                //$("#login-container").show();
                //$("#registro").hide();
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
            //$("#content").hide();
            //$("#login-container").show();
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
                        <span>Publicado el: ${doc.day}/${doc.month}/${doc.year}<span>
                    </div>
                    <hr>
                `;
                content += divPost;
            });
            divContent.append(content);
        }
    }

})