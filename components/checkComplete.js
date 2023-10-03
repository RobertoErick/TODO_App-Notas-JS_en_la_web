const checkComplete = () => {                               //esta funcion sirve para que cuando se presione el boton check cambie a azul
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.remove('far');
};

export default checkComplete;