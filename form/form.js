// Seleciona todas as tags com o elemento 'required"

const fields = document.querySelectorAll("[required]");
// console.log(fields);

for (let field of fields) {

    field.addEventListener("invalid", event => {
        console.log("campo inválido");
    })
}

























document.querySelector("form")
.addEventListener("submit", event => {
    console.log("Pode enviar o formulaŕoio");

    // não vai enviar o formulaŕio
    event.preventDefault();
})