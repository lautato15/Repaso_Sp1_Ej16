function findOddNumber(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) counter += 1;
    }
    if (counter % 2 !== 0) return array[i];
  }
  return "No existe número Impar";
}

// Ejercicio 16
// Crear una función en JavaScript llamada findOddNumber (Encontrar Número Impar) que reciba como parámetro un array de números enteros (positivos y/o negativos) y retorna el número del array que aparezca un número impar de veces.

// Siempre se recibirá un array con un sólo número con esas características. Ejemplos:

// Input ----------------> Output
// findOddNumber([8]) ---> 8
// findOddNumber([2,2,2,2,8,2,2]) ---> 8
// findOddNumber([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) ---> 5
