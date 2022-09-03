let botao = document.querySelector('.formcontato__botao')

botao.disabled = true

export function estadoBotao(input){
    if(!input.validity.valid){
        botao.disabled = true;
    } else {
        botao.disabled = false;
    }
}

export function valida(input){

   

    const tipoDeInput = input.dataset.tipo;



    if(validadores[tipoDeInput]){
        
        validadores[tipoDeInput](input)  
    }

    if(input.validity.valid){
        input.parentElement.classList.remove('container--nome__erro--nome')
        input.parentElement.querySelector('.formcontato__erro--nome').innerHTML = ''
    }else{
        input.parentElement.classList.add('container--nome__erro--nome')
        input.parentElement.querySelector('.formcontato__erro--nome').innerHTML = mostraMenssageErro(tipoDeInput,input)
    }
}





const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'customError'
]

const mensagemErro = {

    nome:{
        valueMissing: 'O campo de nome não pode estar vazio',
        customError: 'O campo deve conter no máximo 50 caracteres'
    },

    email: {
        valueMissing: 'O campo email não pode estar vazio',
        typeMismatch: 'O email digitado não é válido'
    },

    assunto: {
        valueMissing: 'O campo não pode estar vazio',
        customError: 'O campo deve conter no máximo 50 caracteres'
    },

    mensagens:{
        valueMissing: 'O campo não pode estar vazio',
        customError: 'O campo deve conter no máximo 300 caracteres'
    }
}

const validadores = {
    nome:input => validaNome(input),
    assunto:input => validaAssunto(input),
    mensagens:input => validaMensagem(input)
}

function mostraMenssageErro(tipoDeInput, input){
    let mensagem = ''


    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagemErro[tipoDeInput][erro]
        }
    }) 

    return mensagem
}

function validaNome(input){
    const nomePessoa = input.value;
    let erro = "";

    if(nomePessoa.length > 50){
        erro ="O campo deve conter no máximo 50 caracteres"
    }

    input.setCustomValidity(erro);
}

function validaAssunto(input){
    const assunto = input.value;
    let erro = "";

    if(assunto.length > 51){
        erro ="O campo deve conter no máximo 50 caracteres"
    }

    input.setCustomValidity(erro);
}

function validaMensagem(input){
    const mensagem = input.value;
    let erro = "";

    if(mensagem.length > 300){
        erro ="O campo deve conter no máximo 300 caracteres"
    }

    input.setCustomValidity(erro);
}



/*Seu JavaScript de validação aqui




const nome = document.querySelector("#Nome");



nome.addEventListener('blur', (evento) =>  {
    validaNome(evento.target);
});



 = document.querySelector("#erro");
const botao = document.querySelector("#botao");

botao.addEventListener("click", (evento) =>{
    evento.preventDefault();

    const nameValue = nome.value;
   

    if(nameValue == ""){
        erro.textContent ="Campo vazio preencha com seu nome";

        setTimeout(() =>{
            erro.textContent = ""
        }, 3000);

    }

    alert(nameValue.length)
    
    if(nameValue.length > 35){
        erro.textContent ="Não ultrapasse o tamanho";

        setTimeout(() =>{
            erro.textContent = ""
        }, 3000);
    }.textContent = "Campo vazio preencha com seu nome"
});*/