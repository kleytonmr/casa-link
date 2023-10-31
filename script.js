function showPix() {
    var pixLink = document.getElementById("pix-link");
    pixLink.style.display = "block";
}

function copyPixKey() {
    var textArea = document.createElement("textarea");
    textArea.value = "Sua chave Pix aqui"; // Substitua pela sua chave Pix
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Chave Pix copiada para a área de transferência!");
}

