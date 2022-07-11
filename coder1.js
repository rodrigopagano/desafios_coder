let entrada = prompt("ingresar un nombre");

while(entrada != "ESC"){
    switch (entrada) {
        case "PEDRO":
            alert("HOLA PEDRO");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
    default:
        alert("¿QUIEN SOS?");
        break;
    }
    entrada = prompt("ingresar un nombre");
}