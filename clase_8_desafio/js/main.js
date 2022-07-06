//Desafio - integrar el DOM al código.


const divJugador=document.getElementById('jugador')

divJugador.innerHTML=`<h2>${prompt('Dígame su nombre: ')}</h2>`;

const divRival=document.getElementById('rival')

divRival.innerHTML=`<h2>${prompt('Dígame el nombre de su rival: ')}</h2>`;
                    

class Carta{
    constructor (id,nombre,hp,ataque){
        this.id=id
        this.nombre=`<p>Nombre: ${nombre}</p>`
        this.hp=`<p>HP: ${hp}</p>`
        this.ataque=`<p>Ataque: ${ataque}</p>`
    }
}

const carta1= new Carta (1,"Granjero agresivo",3,1)
const carta2= new Carta (2,"Chef loco",2,2)
const carta3= new Carta (3,"Milicia sucia",4,2)
const carta4= new Carta (4,"Mercenario",2,4)
const carta5= new Carta (5,"Caballero Pesado",7,3)
const carta6= new Carta (6,"Asesino",4,6)
const carta7= new Carta (7,"Lancero",8,4)
const carta8= new Carta (8,"Maestro de la espada",7,6)
const carta9= new Carta (9,"Hechicero",6,8)
const carta10= new Carta (10,"Caballero Real",12,6)



const cartasJugador=[carta1,carta3,carta5,carta7,carta9]
const cartasRival=[carta2,carta4,carta6,carta8,carta10]


cartasJugador.forEach(carta => {
    divJugador.innerHTML += `
    <div class="carta" id="Carta-${carta.id}">
    ${carta.nombre}
    ${carta.hp}
    ${carta.ataque}
    </div> `
})

cartasRival.forEach(carta => {
    divRival.innerHTML += `
    <div class="carta" id="Carta-${carta.id}">
    ${carta.nombre}
    ${carta.hp}
    ${carta.ataque}
    </div> `
})