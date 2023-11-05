function scrollToPixSection() {
    var pixSection = document.getElementById("pix-link");
    pixSection.style.display = "block"; // Exibe a seção Pix
    pixSection.scrollIntoView({ behavior: "smooth" });
}

function copyPixKey() {
    var textArea = document.createElement("textarea");
    textArea.value = "00020126360014BR.GOV.BCB.PIX0114+55279962140975204000053039865802BR5919KLEYTON MATOS RAMOS6005Serra62110507Casorio6304346A";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Chave Pix copiada para a área de transferência!");
}

