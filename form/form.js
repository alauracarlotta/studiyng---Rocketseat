// Seleciona todas as tags com o elemento 'required"
const fields = document.querySelectorAll("[required]");
// console.log(fields);


function validateField(field) {

    // lógica para verificar se existem erros
    function verifyErrors() {

        let foundError = false;

        for(let error in field.validity) {
            // in - lista de objetos

            //console.log(error);
            // console.log(field.validity[error])

            // se não for customError
            // então verifica se tem erro

            if (field.validity[error] && !field.validity.valid) {

                foundError = error;
            }
        }

        // console.log(foundError);

        return foundError;
    }


    // console.log(field.validity)
    function customMessage(typeError) {

        const messages = {
            text: {
                valueMissing: "Campo nome obrigatório!"
            },

            email: {
                valueMissing: "Campo e-mail obrigatório!",
                typeMismatch: "Insira um e-mail válido!"
            }
        }

        return messages[field.type][typeError]

    }

    function setCustomMessage(message) {

        const spanError = field.parentNode.querySelector("span.error");

        if (message) {

            spanError.classList.add("active");
            spanError.innerHTML = message;

        } else {

            spanError.classList.remove("active");
            spanError.innerHTML = "";
        }
        
    }

    return function () {

        const error = verifyErrors();

        if (error){

            const message = customMessage(error);
            setCustomMessage(message);

        } else {

            field.style.borderColor = "green";
            setCustomMessage();
        }
    };
}


function customValidation(event) {
    
    const field = event.target;
    //console.log(field.validity)

    // console.log(validateField(field));

    // console.log("Error Exists", error);

    const validation = validateField(field);
    // console.log(validation);

    validation();
}


for (let field of fields) {
    // of - lista de campos
    field.addEventListener("invalid", event => {

        // eliminar o bubble
        event.preventDefault();

        customValidation(event);
    });

    field.addEventListener("blur", customValidation);
}


document.querySelector("form")
.addEventListener("submit", event => {
    console.log("Pode enviar o formulário");

    // não vai enviar o formulaŕio
    event.preventDefault();
})