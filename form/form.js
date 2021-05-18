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

            if (error != "customError" && field.validity[error]) {

                foundError = error;
            }
        }

        return foundError;
    }


    
    const error = verifyErrors();
    console.log("Error Exists", error);

    /* if (error){

        // trocar mensagem de required
        field.setCustomValidity("Esse campo é obrigatório");

    } else {

        field.setCustomValidity("");
    } */
}

for (let field of fields) {
    // of - lista de campos
    field.addEventListener("invalid", customValidation)
}

























document.querySelector("form")
.addEventListener("submit", event => {
    console.log("Pode enviar o formulário");

    // não vai enviar o formulaŕio
    event.preventDefault();
})