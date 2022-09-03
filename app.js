import { valida } from "./validate.js";
import { estadoBotao } from "./validate.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento)=>{

        valida(evento.target)

        
    })
})


  
inputs.forEach(input => {
input.addEventListener('change',(evento) =>{

    estadoBotao(evento.target)
})
})