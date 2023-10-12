import checkComplete from "./components/checkcomplete.js";
import deleteIcon from "./components/deleteIcon.js";
//(() => {
const btn = document.querySelector('[data-form-btn]');      //crear una variable a partir de eñ selector que esta en el HTML

//console.log(btn);                                           //imprimir la funcion en la consola, el valor del boton 
//Funcion cuando se hae un clic

const createTask = (evento) => {                           //Se crea un listener de un clic, con la funcion del evento que se va a realizar
    evento.preventDefault();                                //Evita que se recargue la pagina al dar clic en el boton y que se mantenga lo que se mand a la consola
    const input = document.querySelector('[data-form-input]');//registra lo que esta en el input y lo coloca en una constante
    const value = input.value;                              //el valor colocado en el input, se coloca en en la costante para js
    const list = document.querySelector('[data-list]');     //Seleccionar la lista en la constante list  
    const task = document.createElement('li');              //Crear cada elemento de una lista con la constante task
    task.classList.add('card');                             //hacerlo con el formato card de CSS
    input.value = '';                                       //limpiar el input 
    //backticks
    const taskContent = document.createElement('div');      //Crea el elemento div 
    
    const titleTask = document.createElement('span');       //y crea el contenido que debe de tener este 
    titleTask.classList.add('task');
    titleTask.innerText = value;                            //coloca el texto que escribio el usuario
    taskContent.appendChild(checkComplete());               //el simbolo de check para la tarea
    taskContent.appendChild(titleTask);                     //la tarea que escribio el usuario y que esta cyardada en titletask

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;       //Codigo HTML para crear un elemento nuevo en la lista con el valor que se tenga en input
    // task.innerHTML = content;                            //Funcion para agregar el codigo HTML escrito anteriormente
    task.appendChild(taskContent);                         //contenido de la tarea
    list.appendChild(task);                                 //Colocar como hijo de task
    task.appendChild(deleteIcon()); 

    //console.log(content);                               //despues imprimimos en la conosla el valor del input que se agrego
}

//Listener
/*btn.addEventListener("click", function (evento) {           //Se crea un listener de un clic, con la funcion del evento que se va a realizar
    evento.preventDefault();                                //Evita que se recargue la pagina al dar clic en el boton y que se mantenga lo que se mand a la consola
    const input = document.querySelector("[data-form-input]");//registra lo que esta en el input y lo coloca en una constante
    console.log(input.value);                               //despues imprimimos en la conosla el valor del input que se agrego
})*/

//Misma manera pero mas corta
//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);                  //Cuando se de unn click, vamos a ir a la funcion crate Task
//})();                                                      //Todo se encierra dentro de una funcion y se llama al instante para evitar que este al alcance del usuario