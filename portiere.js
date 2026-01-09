const nomeInput = document.getElementById("nome");
const genere = document.getElementById("genere");
const bottone = document.getElementById("btn");
const output = document.getElementById("output");   
const nome1 = document.getElementById("nome");    
function saluta() {
    const nome = nomeInput.value;
    console.log("Il bottone è stato cliccato!");
    if (genere.value === "uomo") {
        output.innerText = "ciao " +  nome + ", benvenuto!";
        nome1.style.borderColor = "blue";
    } 
    if (genere.value === "donna") {
        output.innerText = "ciao " + nome + ", benvenuta!";
        nome1.style.borderColor = "pink";
    }
}
bottone.onclick = saluta;
