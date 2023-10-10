let misDatos = {
    nombre : 'Agustina',
    apellido : 'Benavent',
    dni : '99999999',
    edad:20,
    comidasFavoritas : [
        'Helado',
        'Brownie',
        'Frutillas'
    ],
    saludar : function(){
        return "Hola mi nombre es " + this.nombre + ' ' + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + this.comidasFavoritas[0]
    }
}
// misDatos.saludar())


let auto = {
    marca: 'Audi',
    modelo: 'A4',
    anio: 2012,
    color: 'Negro',
    posicion: 0,
    avanzar: function(){
        this.posicion = this.posicion + 1
        return this.posicion
    },
    retroceder: function() {
        this.posicion = this.posicion - 1
        return this.posicion
    }
}

let nuevoAuto = {
    marca: 'Audi',
    modelo: 'A4',
    anio: 2023,
    color: 'Negro',
    posicionX: 0,
    posicionY:0,
    moverse: function(x, y){
        this.posicionX = this.posicionX + x
        this.posicionY = this.posicionY + y
    }
}

nuevoAuto.moverse(10, 8)
nuevoAuto.moverse(-5, 34)
nuevoAuto.moverse(39, 74)
console.log(nuevoAuto.posicionX)
console.log(nuevoAuto.posicionY)
