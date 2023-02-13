const textArea = document.querySelector(".textArea");
const areaResultado = document.querySelector(".areaResultado");

/*Criptografar*/

function btnEncriptar () {
    const textoCriptografado = Criptografar(textArea.value);
    areaResultado.value = textoCriptografado;
    textArea.value = "";
}

function Criptografar(stringEncriptada) {
    
    let chavesCodigo = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < chavesCodigo.length; i++) {
        if(stringEncriptada.includes(chavesCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(chavesCodigo[i][0], chavesCodigo[i][1]);
        }
    }

    /*Para mudar o conteudo oculto e mostrar o btn copiar*/
    document.getElementById("conteudoResultado").style.display="none";
    document.getElementById("idCopiar").style.display = "block";

    return stringEncriptada;
}

/*Descriptografar*/

function btnDesencriptar () {
    const textoDescriptografado = Descriptografar(textArea.value);
    areaResultado.value = textoDescriptografado;
    textArea.value = "";
}

function Descriptografar(strigDescriptografada) {

    let chavesCodigo = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];

   strigDescriptografada = strigDescriptografada.toLowerCase();

    for(let i = 0; i < chavesCodigo.length; i++) {
        if(strigDescriptografada.includes(chavesCodigo[i][1])) {
           strigDescriptografada = strigDescriptografada.replaceAll(chavesCodigo[i][1], chavesCodigo[i][0]);
        }
    }

    /*Para tornar conteudo oculto e mostrar o btn copiar*/
    document.getElementById("conteudoResultado").style.display="none";
    document.getElementById("idCopiar").style.display = "block";

    return strigDescriptografada;
}

/* Copiar texto*/

function btnCopiar () {
    var copiado = document.getElementById("idResultado").value;
   
     if (navigator.clipboard.writeText(copiado)) {
        document.getElementById("idCopiar").textContent = "Copiado ✓";
    }
     setInterval(function () {
        document.getElementById("idCopiar").textContent = "Copiar";
    }, 2000);
    
    console.log(copiado);
}