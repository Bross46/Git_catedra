const formRegister = document.querySelector("#formRegister");

const validarFormulario = (event) => {

    event.preventDefault();

    const firstname = document.querySelector("#nombre");
    const lastname = document.querySelector("#apellido");
    const email = document.querySelector("#correo");
    const legajo = document.querySelector("#legajo");
    const password = document.querySelector("#contraseña");
    let validation = true;

    if(firstname.value.trim() ===""){

        firstname.classList.add("error");
        document.querySelector("#error-nombre").textContent ="Debe completar el campo Nombre";
        validation = false;
    }
    if(lastname.value.trim()===""){
        document.querySelector("#error-apellido").textContent="Debe completar el campo Apellido";
        lastname.classList.add("error");
        validation= false;
    }
    if(legajo.value.trim()===""){
        document.querySelector("#error-legajo").textContent="Debe ingresar su legajo";
        lastname.classList.add("error");
        validation= false;
    }
    if(email.value.trim()===""){
        document.querySelector("#error-correo").textContent='Debe completar el campo Email';
        email.classList.add('error')
        validation=false;
    }
    if(password.value.trim()===""){
        document.querySelector("#error-contraseña").textContent='Debe completar el campo contraseña';
        password.classList.add('error');
        validation=false;
    }else if(password.value.length < 6 || password.value.length > 12){
        document.querySelector("#error-contraseña").textContent="La contraseña debe contener entre 6 y 12 caracteres";
        password.classList.add("error");
        validation=false;
    }
    

    if(validation){
        formRegister.submit()
    } else{
        return false;
    }

}

formRegister.addEventListener("submit",validarFormulario)
