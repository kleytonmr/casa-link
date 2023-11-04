function scrollToPixSection() {
    var pixSection = document.getElementById("pix-link");
    pixSection.style.display = "block"; // Exibe a seção Pix
    pixSection.scrollIntoView({ behavior: "smooth" });
}

function copyPixKey() {
    var textArea = document.createElement("textarea");
    textArea.value = "68856535-1717-4a9c-8fa6-d3bcbafc6a7a";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Chave Pix copiada para a área de transferência!");
}

