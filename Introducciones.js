var n = 5;
var nombre = "Oscarin";

function Operacion(a, b) {
    if (a > b) {
        var r = a + b;
    }
    if (b > a) {
        var r = b - a;
    }
    if (a == b) {
        var r = a * b;
    }

    return r;
}

const formulario = document.forms['op1'];
const num1 = document.forms['op1_num1'];
const num2 = document.forms['op1_num2'];
const btn = document.forms['op1_num2'];



// let Estaciones=["Verano", "Invierno", "Otoño"];
// //Agregar al final
// Estaciones.push("Primavera");
// // agregar primero
// Estaciones.unshift("Calidos");
// // Eliminar el ultimo
// // Estaciones.pop();
// //Elimna el parametro
// // Estaciones.shift("Calidos");
// //Elimina a partir de la posicion
// Estaciones.splice(4);
// document.write(Estaciones);

// let Personas = [
//     {
//         "Cedula": "07037",
//         "Nombre": "Teddy",
//         "Apellido": "Kun",
//         "Sexo": "M",
//         "Edad": "25",
//     },
//     {
//         "Cedula": "07038",
//         "Nombre": "Jeanina",
//         "Apellido": "Romero",
//         "Sexo": "F",
//         "Edad": "25",
//     },
//     {
//         "Cedula": "07039",
//         "Nombre": "Oscarito",
//         "Apellido": "Vera",
//         "Sexo": "M",
//         "Edad": "24",
//     }
// ]

// for (let op of Personas) {
//     document.write(op.Cedula + " " + op.Nombre + "<br")
// }


// var id = parseInt(prompt("Ingrese Cedula"));
// var name = ("Ingrese Nombre");
// var lastname = prompt("Ingrese Apellido");
// var gender = prompt("Ingrese Sexo");
// var age = parseInt(prompt("Ingrese Eda"));

// let People = [
//     {
//         "Cedula": `${id}`,
//         "Nombre": `${name}`,
//         "Apellido": "Kun",
//         "Sexo": "M",
//         "Edad": "25",
//     }
// ]
// for (let op of People) {
//     document.write(op.Cedula + " " + op.Nombre + "<br")
// }












// function Primo(x){
//     let res;
//     if(x<=1){
//         res= "Es primo";
//     }
//     for (var i=2;i<=x-1;i++){
//         if(x%i==0){
//             res ="Es primo";
//         }else{

//             res ="No es Primo";
//         }
//     }

//     return res;
// }


// var x=parseInt(prompt("Ingrese valor uno"));
// document.write(Primo(x));

// var n1=parseInt(prompt("Ingrese valor uno"));
// var n2=parseInt(prompt("Ingrese valor dos"));

// document.write(Operacion(n1,n2));
// alert(n);
// console.log(nombre);
// document.write(n);
