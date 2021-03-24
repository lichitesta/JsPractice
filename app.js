// console.log("Escritura comun en consola");
// console.error("error de prueba");
// console.warn("advertencia");
 
/*
// Tipos de variables en Js : var, let ,const
// Var es global y no se utiliza mucho lo mas normal es usar let o const 
// la diferencia es que la const es una constante lo que quiere decir que no se puede reasignar

//tipos de datos : String , numbers , boolean , null , undefined, Symbol
 const nombre = 'Lisandro';
 const edad = 23;
 const crack = true;
 const facha = 0.2;
 const usd = null;
 const y = undefined;
 let z;

//para saber el tipo se utiliza typeof seguido del nombre de la variable , Ej:

console.log(typeof y);

//concatenacion manera antigua
console.log('Mi nombre es '+ nombre +' y mi edad es '+ edad);

//concatenacion con Template String
const saludo = `Mi nombre es ${nombre} y mi edad es ${edad}`;
console.log(saludo);

//propiedades y metodos de los stings

console.log(nombre.length)//saber al cantidad de caracteres de un string
console.log(nombre.toUpperCase());//transforma todo el texto a mayusculas
console.log(nombre.toLowerCase()); // lo transforma en minusculas
console.log(nombre.substring(0,4)); //crea una string nueva desde el indice indicado hasta el segundo indice indicado
console.log(nombre.split(''));//Separa el string en un arreglo segun el criterio que se indique enter parentesis el metodo
 */
/*
// Arreglos

// const numeros = new Array(1,2,3,4,5);
// console.log(numeros);

const frutas = ['manzanas' , 'peras', 'bananas' , 'kiwis', 'pomelos', 10 , true];
console.log(frutas);//lista completa
console.log(frutas[1]);//conseguir un elemento en especifico
frutas[7] = 'limones';
console.log(frutas);//lista completa con el nuevo elemento añadido

//Cuando no se sabe la cantidad de elementos se puede utilizar el metodo push para poder agregarlo al final del arreglo

frutas.push('mangos');
console.log(frutas);//lista completa con el nuevo elemento añadido

//O el metodo unshift para agregarlo al principio

frutas.unshift("durazno");
console.log(frutas);//lista completa con el nuevo elemento añadido

//para sacar el ultimo elemento de la lista se puede utlizar el metodo pop

frutas.pop();
console.log(frutas);//lista completa sin el ultimo elemento "mangos"

//para saber si es un array se utiliza el metodo isArray 

console.log(Array.isArray(frutas));

//para saber el indice de cierto valor se puede utilizar el metodo indexof

console.log(frutas.indexOf('peras'));
*/
/*
//Objetos 

const persona = {
nombre: 'fulano',
apellido: 'letal',
edad : 23,
hobbies: ['musica' , 'peliculas','deporte'],
direccion: {
   calle : 'fragueiro' ,
   altura : 210,
   ciudad : 'almafuerte',
   provincia : 'cordoba',
}
}

console.log(persona); //accede a una descripcion de la persona en general
console.log(persona.nombre); //accede a un atributo de la persona
console.log(persona.nombre, persona.apellido); //se puede acceder a varios atributos en simultaneo
console.log(persona.hobbies[1]); //acceder a un elemento del array que contiene persona
console.log(persona.direccion.calle)//para acceder a un atributo del objeto que se encuentra dentro de nuestro objeto

//para sacar atributos del objeto de persona y transformarlos en variables:

const {nombre, apellido , direccion:{ calle }} = persona; //direccion: {calle} define al atributo calle del objeto direccion que se encuentra dentro de personas como una variable 
console.log(calle);

//podemos agregar propiedades
persona.email = 'fulanoletal45@hotmail.com';
console.log(persona);
*/

//Arreglo de objetos

const todos = [
    {
  id : 1,
  texto : 'sacar la basura',
  completado : true
    },
    {
  id : 2,
  texto : 'Reuncion con marcos',
  completado : true
    },
    {
  id : 3,
  texto : 'turno del dentista',
  completado : false
     }
];

//console.log(todos[1].texto); //imprimir un atributo de un objeto que se encuntra en el array

//convertir a JSON para poder mandarlo a una api por ejemplo

// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

/*
// Ciclos 
//For  (definicion , condicion , incremento)
for(let x = 1 ; x <= 10 ; x++){
 console.log(`Numero de vueltas del for : ${x}`);
}
//while 
let x = 0; //definicion
while(x<10){ //condicion
    console.log(`Numero de vueltas del while: ${x}`);//sentencia
     x++;//incremento 
}
*/

/*
//como recorrer arreglos 
//se puede utilizar un bucle for 

for(let x = 1 ; x < todos.length ; x++){
    console.log(`Numero de vueltas del for : ${x}`);
   }

for(let todo of todos){ //este ciclo va a dar una vuelta por cada elemento del arreglo
console.log(todo);
}

// forEach - el metodo forEach toma como parametro una funcion que se va a ejecutrar por cada elemento del array

todos.forEach(function(todo){ //a la funcion le pasamos la variable que queremos usar para representar cada elemento en este caso cada tarea
console.log(todo.texto);
});

//map 

const todoText = todos.map(function(todo){ //Similar a forEach pero devuelve una array
         return todo.texto;
    });

console.log(todoText); //se creo una nueva arrey con los textos de las tareas pendientes

//filter - filtro

const todosCompletados = todos.filter(function(todo){ //Similar a forEach pero devuelve una array con los elementos que cumplan con cierta condicion por eso se llama filtro
    return todo.completado == true;

});
console.log(todosCompletados);

// filtro conjunto con el metodo map  aca se empieza a ver el potencial

const nombresCompletados = todos.filter(function(todo){ 
    return todo.completado == true;
}).map(function(todo){
return todo.texto;
});
console.log(nombresCompletados);

*/

/*
//Condicionales

const x = 2;
const z = 11;

//si en la condicional utilizamos doble parentesis '==' compara el valor pero no el tipo para que compare si son del mismo valor y tipo se utiliza el triple parentesis '===='

if(x === 10 ){ //por eso aca no entra al condicional si no son del mismo tipo a pesar de tener le mismo valor
 console.log('x es igual a 10 en valor y tipo') ;
}
else if( x > 10){
console.log('x es mayor que 10');
}else{ 
    console.log("x no es igual a 10 en valor y tipo");
}

// Or || / and &&

if(x < 5 || z > 10 ){ //alguna de la condiciones tiene que ser verdadera para que entre en la condicional
    console.log('x es menor a 5 o z es mayor a 10') ;
   }

if(x < 5 && z > 10 ){ //ambas condiciones tiene que ser verdadera par que entre en la condicional
    console.log('x es menor a 5 y z es mayor a 10') ;
   }

//Crear una variable segun una condicion
const t = 2;
const color = t < 3 ? 'Rojo' : 'Azul'; //antes del ? se colaca la condicion y luego del ? se coloca el valor para el resultado verdadero y luego despues de : se coloca el valor apra el resultado falso
console.log(color);

//Switch case

switch(color){ //segun la variable que se coloque como parametro en la funcion switch sera el resutlado
 case'Rojo': //en caso que el valor del a variable color sea 'rojo' lo que se ejecute sera lo siguiente :
 console.log('El color es Rojo '); //inidicamos la sentencia
 break;//Break hace que se termine la condicional switch luego de ejecutar todas las instrucciones del caso que se dio segun cada caso

 case'Azul':
 console.log('El color es azul');
 break;

 default:
     console.log('El color no es ni azul ni rojo');
     break;
}
*/
 
/*
//Funciones 

//la mas simple de todas :
function sumaSimple(num1 , num2) { // creamos una funcion con el nombre de sumaSimple que recibe dos parametros cuando es invocada
console.log(num1 + num2); //Se suman los dos parametros pasados cuando se llamo la funcion y se muestran en consola
}
sumaSimple(1,2); // invocacion de la funcion con los parametros que se le pasaron

//se pueden asignar  parametros con valores por defecto por si no se especifican
function suma(num1 = 1 , num2 =4) {
    console.log(num1 + num2);
    }
    suma();
    suma(3,2);

//generalmente no utilizamos las funciones para que hagan una impresion en consola sino que la utilizamos para que devuelva algun resultado con un return

function resta(num1 = 5,num2= 2){
return num1 - num2
}
console.log(resta(10,5 ));

//funciones de flechas o arrow functions  
//fueron introducidas en 2015 y para poder utilizarla en lugar de utilizar la palabra reservada function
// se la denomina como una variable  luego se coloca un = de asignacion seguido de los parametos y luego uan flecha => 
const  restaFlecha = (num1 = 5,num2= 2) => console.log( num1 - num2);
  //cuando es uan sola sentencia como en el ejemplo anterior se puede obviar la utilizacion de corchetes {}  
restaFlecha(20,5);

//Cuando queremos devolver algo ni siquiera hace falta utilizar la funcion 'return'
const  restaFlechaRetorno = (num1 = 5,num2= 2) =>  num1 - num2;
console.log(restaFlechaRetorno(20,10));

//se pueden utilizar las funciones de flecha en diferentes lugares y es una funcionalidad muy potente
//por ejemplo  para recorrer un array con la funcion forEach de manera mas compacta

todos.forEach(todo => console.log(todo.texto));
*/

/*
//Programacion orientada a objetos 
//Constructores  - Al crear un constructor siempre se comienza con una mayuscula

function Persona(nombre, apellido, nacimiento){
this.nombre = nombre;
this.apellido = apellido;
this.nacimiento =  new Date(nacimiento); //creamos un objeto tipo Date - Se utiliza para las fechas y horas tambien
this.obtenerAñosNacimiento = function (){//creamos una funcion dentro del constructor para poder utilizarla con todas las personas
          return this.nacimiento.getFullYear();
}
this.obtenerEdad = nacimiento => console.log( 2021 - nacimiento.getFullYear()); //tambien podemos crear funciones de flecha como esta
this.nombreCompleto = (nombre,apellido) => console.log(`El nombre completo : ${this.nombre} ${this.apellido}`);
}
    
//instanciar una persona: 

const persona1 = new Persona('Lisandro','Testa','4-12-1998');
const persona2 = new Persona('Matias','Koppoto','4-30-1997');
const persona3 = new Persona('Mine','Coral','12-09-1998');

console.log(persona3);

console.log(persona2.nacimiento.getFullYear()); //tiene muchos metodos diferentes el obejto tipo Date
console.log(persona1.obtenerAñosNacimiento()); //mismo resultado que la sentencia anterior pero logrado con una funcion creada en el constructor 
persona1.obtenerEdad(persona1.nacimiento); //primera funcion de flecha para obtener la edad
persona1.nombreCompleto();

//Prototipos
//se utiliza para no tener la funciones con cada instanciad el objeto
// por que tal vez no la necesites en todos los objetos  por eso se colocan en el prototipo / prototype

//para colocar al funcion en el prototipo se realiza de la siguiente manera

Persona.prototype.obtenerAñosNacimiento2 = function() {
    return this.nacimiento.getFullYear();
}

Persona.prototype.obtenerEdad2 = nacimiento => console.log(2021 - nacimiento.getFullYear());

Persona.prototype.nombreCompleto2 = function(){ console.log(`El nombre completo : ${this.nombre} ${this.apellido}`)};

console.log(persona2.obtenerAñosNacimiento2());
persona2.obtenerEdad2(persona2.nacimiento);
persona2.nombreCompleto2();
console.log(persona1);


//Clases
class Persona{
constructor(nombre, apellido, nacimiento){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento =  new Date(nacimiento);
}

getAñoNacimiento(){
return this.nacimiento.getFullYear();
}

getNombrecompleto(){
return `${this.nombre}  ${this.apellido}`;
}
}

//instanciacion de objetos es de la misma forma que anteriormente

const persona1 = new Persona('Lisandro','Testa','4-12-1998');
const persona2 = new Persona('Matias','Koppoto','4-30-1997');
const persona3 = new Persona('Mine','Coral','12-09-1998');

console.log(persona2.getAñoNacimiento());
console.log(persona1);
*/

//dom
/*
//Selectores
//selectores individuales
document.getElementById('my-form'); //selecciona un elemento individual de la estructura html atravez de su id
document.querySelector('.container'); //se puede seleccionar un elemento individual segun su id , clase ,tipo  - si existe mas de un h1 por ejemplo solo va a seleccionar el primero por que es un selector individual
//selectores multiples

console.log(document.querySelectorAll('.item')); //esto nos devuelve un NodeList que es similar a una array y se puede utilziar metodo de array en el como por ejemplo un forEach para poder recorrerlo - es el mas nuevo los siguiente son mas viejos
console.log(document.getElementsByClassName('item'));// no hace falta el punto antes de la palabra 'item' por que solo se utilza para seleccionar varios elementos pertenecientes a una misma clase , lo que devuelve es una coleccion html (HTMLCollection) y a diferencia del metodo anterior no se peude utilizar metodos de array en esta , hay que convertirla en una array si se quieren usar metodos del array en ella
console.log(document.getElementsByTagName('li'));//similar al anterior pero solo se utilzia con los tags

//Ejemplo de recorrido

const items = document.querySelectorAll('.item');
items.forEach(item => console.log(item));

//Manipulacion del dom 

const ul = document.querySelector('.items');

//ul.remove(); //remueve el elemento del documento
//ul.lastElementChild.remove(); remueve el ultimo elemento del documento
//ul.firstElementChild.textContent = 'Prueba'; //modifica el texto del priemr elemento que contiene la ul
//ul.children[1].innerText = 'joselito'; //el metodo .children[1] selecciona e elemento que se coloce entre las llaves y el inner text es similar a textContent
ul.lastElementChild.innerHTML = '<h1>Holas<h1>'; //sirve para agregar elementos html de manera dinamica dentro de la pagina web

//tambien podemos modificar el estilo de los elementos atravez de js
const btn = document.querySelector('.btn');
btn.style.background = 'red';

//esto es muy util conjunto con  addEventListener que permite que cambie las propiedades de un objeto cuando se realiza alguna accion sobre el mismo por ejemplo
//la forma que funciona el AddEventListener es de la siguiente manera * primero se agrega  el evento que se queire utilizar  * segundo la funcion que queres que se ejecute cuando se de el evento anterior
btn.addEventListener('click', (e) => {
    e.preventDefault();//esta funcion previene que se realze el envio del formulario ya que es un elemento submit y permite utilizarlo como un boton plano sin funcionalidades extras 
   // console.log('click');
    // console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc' //se utiliza para poder  cambiar el color de fondo del formulario en esta caso cuando se hace click en el boton
    document.querySelector('body').classList.add('bg-dark');//lo que estamos haciendo aca primero es seleccionar al body con el queryselector y luego agregar una clase con el mmetodo calssList.add la cual se llama 'bg-dark' y la tenemos localizada en nuestra hoja de estilos.css o styles.css
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> Click del boton </h1>';
});
//existen muchos diferentes eventos como pro ejemplo el mouseover que se activa cuando pasamos el mouse por ensima del elemento
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();//esta funcion previene que se realze el envio del formulario ya que es un elemento submit y permite utilizarlo como un boton plano sin funcionalidades extras 
   // console.log('click');
    // console.log(e.target);
    document.querySelector('#my-form').style.background = 'grey' //se utiliza para poder  cambiar el color de fondo del formulario en esta caso cuando se hace click en el boton
    document.querySelector('body').classList.add('bg-dark');//lo que estamos haciendo aca primero es seleccionar al body con el queryselector y luego agregar una clase con el mmetodo calssList.add la cual se llama 'bg-dark' y la tenemos localizada en nuestra hoja de estilos.css o styles.css
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> Mouse encima </h1>';
});

//o por ejemplo el mouseout que se activa cuando sacamos el mouse de encima del elemento con el cual estamos trabajando
btn.addEventListener('mouseout', (e) => {
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> Mouse Fuera del elemento </h1>';
});
//existen muchisimos mas eventos que se pueden utilizar se puede ampliar el conocimiento de estos checkeando la documentacion
*/

/*
//creacion de una funcionalidad

const formulario = document.querySelector('#my-form');
const nombreInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const mensaje = document.querySelector('.msg');
const listaUsuarios = document.querySelector('#users');
//no hace falta que coloquemos la funcion en la segunda propieda que se le pasa a la funcon addEvenetListener , se puede poner el nombre y definir antes  o despues dicha funcion
formulario.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
   
    if (nombreInput.value === '' || emailInput.value === '') 
    {
         mensaje.classList.add('error') 
         mensaje.innerHTML = 'Porfavor llene todos los campos'
        //podemos lograr que el estilo que le agregamos al mensaje de error se vaya despues de un determinado tiempo usando la siguiente funcion :
        //SetTimeout -- *como primer parametro se indica una funcion(puede ser de flecha)* como segundo para metro se indica el tiempo en milisegundos que tiene que pasar atnes que se ejecute la funcion
         setTimeout(() => mensaje.remove(),3000); //utilizamos la funcion remove para poder sacarle la clase al mensaje que le habiamos asignado anteriormente llamado error luego de 3 segundos
    }
    else{
        //pasos para agregar un nuevo usuario a la lista:
        const li = document.createElement('li'); //creamos un elemento li para luego agregarlo a nuestra ul de usuarios
       //lo que hacemos a continuacion es ingresar dentro del li  un textnode que contenga el nombre del usuario y su email
        li.appendChild(document.createTextNode(`Nombre: ${nombreInput.value} - Email: ${emailInput.value}`))
    //utilizamos la funcion appendchild que agrega algo dentor de ese elemento con el elemento lista de usuarios que contiene el ul de user que tenemos definido en el documento html   
        listaUsuarios.appendChild(li);
    // como ultima medida luego de ingresar los nuevos usuarios tenemos que limpiar los campos
    nombreInput.value = '';
    emailInput.value = '';
    }    

};
*/

