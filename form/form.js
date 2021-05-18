// Seleciona todas as tags com o elemento 'required"
const fields = document.querySelectorAll("[required]");
// console.log(fields);

function customValidation(event) {
    
    // eliminar o bubble
    event.preventDefault();
    
    const field = event.target;
    //console.log(field.validity)


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


    
    const error = verifyErrors();
    console.log("Error Exists", error);

    const spanError = field.parentNode.querySelector("span.error");

    if (error){

        spanError.classList.add("active");
        spanError.innerHTML = "Campo Obrigatório!";

    } else {

        spanError.classList.remove("active");
        spanError.innerHTML = "";
    }
}

for (let field of fields) {
    // of - lista de campos
    field.addEventListener("invalid", customValidation)
    field.addEventListener("blur", customValidation)
}

























document.querySelector("form")
.addEventListener("submit", event => {
    console.log("Pode enviar o formulário");

    // não vai enviar o formulaŕio
    event.preventDefault();
})