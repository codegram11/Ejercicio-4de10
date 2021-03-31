/**12) Programa una función que determine si un número es primo 
 * (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
 *  */

const numeroPrimo = (num = undefined) => {
    if (typeof num !== 'number') return console.error('Debe ser un numero');
    if (num === undefined) return console.error('Debe ingresar un numero');
    if (num === 0) return console.error('El numero no puede ser Cero');
    if (num === 1) return console.error('El numero no puede ser Uno');
    if (Math.sign(num) === -1) return console.error('El numero no puede ser Negativo');
    return (num % 2 !== 0) ? console.info(`El numero ${num} es Primo`) : console.info(`El numero ${num} No es primo`)
}

numeroPrimo(16);

/**13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
 * */

const parImpar = (num = 0) => {
    if (num === 0) return console.info('Deber ingresar un numero mayor a cero');
    if (typeof num !== 'number') return console.info('Debe ingresar un numero ');
    return (num % 2 == 0) ? console.log(`El numero "${num}" es Par`) : console.log(`El numero "${num}" no es par`)
}

parImpar(5);

/**14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
 * pe. miFuncion(0,"C") devolverá 32°F.
 *  */

const conversion = (num = undefined, tipo = '') => {
    if (num === undefined && tipo === '') return console.warn('Debe ingresar el numero y el tipo de grado');
    if (typeof num !== 'number') return console.warn('Debe agregar un numero')
    if (typeof tipo !== 'string') return console.warn('Debe agregar °C o °F')


    if (tipo === 'c' || tipo === 'C') {
        return console.info(`Celcius: ${num}°C  Fahrenheit: ${Math.round((num*1.8)+32)}°F`);
    } else if (tipo === 'F' || tipo == 'f') {
        return console.info(`Fahrenheit: ${num}°F   Celcius: ${Math.round((num-32)*0.55)}°C`);
    } else {
        console.log('Debe agregar Celcius(C) o Fahrenheit (F)');
    }


};

conversion(2, 'C');
conversion(2, 'f');