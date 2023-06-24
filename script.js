const btn = document.querySelector("[data-form-btn]");      //crear una variable a partir de eñ selector que esta en el HTML

console.log(btn);                                           //imprimir la funcion en la consola, el valor del boton 

 const createTask = (evento) => {                           //Se crea un listener de un clic, con la funcion del evento que se va a realizar
    evento.preventDefault();                                //Evita que se recargue la pagina al dar clic en el boton y que se mantenga lo que se mand a la consola
    const input = document.querySelector("[data-form-input]");//registra lo que esta en el input y lo coloca en una constante
    console.log(input.value);                               //despues imprimimos en la conosla el valor del input que se agrego
}

//Listener
/*btn.addEventListener("click", function (evento) {           //Se crea un listener de un clic, con la funcion del evento que se va a realizar
    evento.preventDefault();                                //Evita que se recargue la pagina al dar clic en el boton y que se mantenga lo que se mand a la consola
    const input = document.querySelector("[data-form-input]");//registra lo que esta en el input y lo coloca en una constante
    console.log(input.value);                               //despues imprimimos en la conosla el valor del input que se agrego
})*/

//Misma manera pero mas corta
//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);


