import { multiplicarPor2, esPar, menorQue0  } from "../src/basic";

describe("Colecciones en JS: Array", () => {
    it("Pueden crearse usando [ ]", () => {

        // crea un array "a" usando los corchetes []
         
        expect(Array.isArray(a)).toBeTruthy();
    });
    it("Pueden crearse usando new Array", () => {

        // crea un array "a" usando el constructor "new"

        expect(Array.isArray(a)).toBeTruthy();
    });
    it("Pueden estar vacíos o contener elementos", () => {

        // crea un array que esté vacío y otro que no esté vacío

        expect(emptyArray).toEqual([]);
        expect(nonEmptyArray).not.toBe([]);
    });
    it("Tienen una longitud correspondiente que podemos conocer con la propiedad 'length'", () => {

        let list = [10, "foo", true, "pepe"];

        // completa la definición que falta en "???" usando la propiedad length

        expect("???").toBe(4);
    });
    it("Nos permiten acceder a cada elemento del array", () => {

        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // sustituye "???" en cada caso para acceder al elemento correspondiente de la lista

        expect("???").toBe("Piña");
        expect("???").toBe("Melón");
    });
    it("Nos permiten modificar cada elemento", () => {

        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // Añade el código que permite modificar el elemento correspondiente

        expect(fruits).toEqual(["Piña", "Pera", "Fresa", "Melón"])
    });
    it("Podemos añadir elementos", () => {
        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // Añade el código que permite modificar la lista (incluyendo un elemento al final)

        expect(fruits).toEqual(["Piña", "Manzana", "Fresa", "Melón", "Pera"])
    });
});

describe("Ejemplos resueltos: Operaciones iterables", () => {
    it("map nos permite realizar operaciones elemento a elemento", () => {

        let list = [1,5,7,9,11,13];

        // utiliza la función map para aplicar la función multiplicarPor2 a los números de la lista
        // SOLUCIÓN: 
        list = list.map(multiplicarPor2);
        
        expect(list).toEqual([2,10,14,18,22,26]);
    });
    it("map nos permite realizar operaciones elemento a elemento (2)", () => {

        let list = [1,5,7,9,11,13];

        // utiliza la función map para aplicar la función multiplicarPor2 a los números de la lista
        // SOLUCIÓN: 
        list = list.map( n => n*2 );
        
        expect(list).toEqual([2,10,14,18,22,26]);
    });
    it("filter recorre la lista y se queda con los elementos que cumplen una condición", () => {

        let list = [1,2,3,4,5,6,7,8,9];      

        // utiliza la función filter para quedarte sólo con los números pares
        // SOLUCIÓN: 
        list = list.filter( esPar );
        
        expect(list).toEqual([2,4,6,8]);
    });
    it("filter recorre la lista y se queda con los elementos que cumplen una condición (2)", () => {

        let list = [1,2,3,4,5,6,7,8,9];

        // utiliza la función filter para quedarte sólo con los números pares
        // SOLUCIÓN: 
        list = list.filter( num => num % 2 == 0 );
        
        expect(list).toEqual([2,4,6,8]);
    });
    it("some recorre los elementos de la lista y comprueba si ALGUNO cumple la condición", () => {

        let list = [1, 2 , -27, 13, 40, 95 , 82, 9];

        // aplica la función some para verificar si alguno de los números de la lista es menor que 0
        // SOLUCIÓN:
        let condicion = list.some(menorQue0);        
        
        expect(condicion).toBeTruthy();
    });
    it("every recorre los elementos de la lista y comprueba si ALGUNO cumple la condición", () => {

        let list = [1, 2 , -27, 13, 40, 95 , 82, 9];

        // aplica la función some para verificar si alguno de los números de la lista es menor que 0
        // SOLUCIÓN:
        let condicion = list.some(menorQue0);    
        // SOLUCIÓN ALTERNATIVA:
        // let condición = list.some( n => n < 0 );    
        
        expect(condicion).toBeTruthy();
    });
});

describe("Operaciones iterables", () => {
    it("map nos permite realizar operaciones elemento a elemento", () => {

        let list = [1,5,7,9,11,13];

        // utiliza la función map para aplicar los números de la lista
        
        expect(result).toEqual([0,4,6,8,10,12]);
    });
    it("map nos permite realizar operaciones elemento a elemento (2)", () => {

        let list = ["Pikachu", "Charmander", "Magikarp"];

        // utiliza la función map para aplicar los números de la lista y guardar la nueva lista en result
        
        expect(result).toEqual([
            "Pikachu, te elijo a ti!",
            "Charmander, te elijo a ti!",
            "Magikarp, te elijo a ti!"
        ]);
    });
    it("Buscando el planeta con Array.includes", () => {

        let knownExoplanets = [ "TOI-1298 b","TOI-132 b","TOI-1333 b","TOI-1338 b","TOI-1431 b","TOI-1444 b","TOI-1478 b","TOI-150.01","TOI-157 b","TOI-1601 b","TOI-163 b","TOI-1634 b","TOI-1685 b","TOI-169 b","TOI-172 b","TOI-1728 b","TOI-1749 b","TOI-1749 c"];

        // utiliza la función includes para comprobar si la lista de planetas contiene el planeta TOI-1634 b
        
        expect(result).toBeTruthy();        
    });
    it("filtrando planetas", () => {

        let knownExoplanets = [ "TOI-1298 b","TOI-132 b","TOI-1333 b","TOI-1338 b","TOI-1431 b","TOI-1444 b","TOI-1478 b","TOI-150.01","TOI-157 b","TOI-1601 b","TOI-163 b","TOI-1634 b","TOI-1685 b","TOI-169 b","TOI-172 b","TOI-1728 b","TOI-1749 b","TOI-1749 c"];

        // utiliza la función filter para quedarnos con los planetas que terminan por la letra c
        // puedes utilizar la función .endsWith para comprobar si un string termina por una letra
        // p.ej. "Hola".endsWith('a') devuelve true
        
        // todos los planetas de result terminan con la letra c
        expect(result).toBeTruthy();        
    });

    // Bonus: Escribe un test como los anteriores con algún ejemplo que utilice 
    // una lista alguna de las funciones que hemos visto, como map o filter.
});