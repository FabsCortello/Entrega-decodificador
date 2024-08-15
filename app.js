const textArea = document.querySelector('.areaTexto');
const mensagem = document.querySelector('.mensagem');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoCripto = criptografia(textArea.value);
    mensagem.value = textoCripto;
    textArea.value = "";
    var imagemLupa = document.getElementById('imagemLupa');
    imagemLupa.classList.add('hidden');
} 

function criptografia(stringCripto){
let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
stringCripto = stringCripto.toLowerCase();
for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringCripto.includes(matrizCodigo[i][0])) {
        stringCripto = stringCripto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
}
return stringCripto;
}
function btnDescriptar(){
    const textoDescripto = descripto(textArea.value);
    mensagem.value = textoDescripto;
    textArea.value = "";
} 

function descripto(stringDescripto){
let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
stringDescripto = stringDescripto.toLowerCase();
for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDescripto.includes(matrizCodigo[i][1])) {
        stringDescripto = stringDescripto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}
return stringDescripto;
}
function btnCopiar(){
    var mensagem = document.getElementById("outputMensagem");
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);
    document.execCommand("cut");
    alert("Sua mensagem foi copiada. Cole no lugar de 'digite sua mensagem' e clique em Descriptografar. ");
}
function limparCampo(){
    var mensagem = document.getElementById("outputMensagem");
    mensagem.value = "";
    document.getElementById('imagemLupa').classList.remove('hidden');
}

