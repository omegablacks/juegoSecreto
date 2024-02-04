let listaNumeros = [2, 4, 6, 8, 5, 7, 8, 4, 2, 8, 9, 2, 5, 7, 8, 8, 8, 8];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

function mostrarElementosLista() {
    for(let i = 0; i < lenguagesDeProgramacion.length; i++ ){
        console.log(lenguagesDeProgramacion[i]);
    }
}

function mostrarElementosListaInvertidos() {
    for(let i = lenguagesDeProgramacion.length; i >= 0; i-- ){
        console.log(lenguagesDeProgramacion[i]);
    }
}

function promedioListaNumeros(params) {
    console.log(listaNumeros.length);
    let prom = 0;
    for(let i = 0; i < listaNumeros.length; i++){
        prom = prom + listaNumeros[i];
    }
    prom = prom/listaNumeros.length;
    return prom;
}

//mostrarElementosLista();
console.log('')
//mostrarElementosListaInvertidos();
console.log(`${promedioListaNumeros()}`);


/*2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos:
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

/*3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/

/*4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/