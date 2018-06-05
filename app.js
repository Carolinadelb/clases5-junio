const tasks = [
  {
    name: 'Pasear perro',
    duration: 40
  },
  {
    name: 'Estudiar JS',
    duration: 120
  },
  {
    name: 'Ver un capítulo de Aggretsuko',
    duration: 15
  },
  {
    name: 'Ir a clases',
    duration: 300
  },
  {
    name: 'Cepillar al gato',
    duration: 40
  },
  {
    name: 'Ver fail compilation en Youtube',
    duration: 120
  }
];

//guardar en un arreglo de stirng con el nombre de todas las tareas
//Arreglo de tareas

//Con for

let tasksNames = [];

for (let i = 0; i<tasks.length; i++){
  tasksNames.push(tasks[i].name);
}

//forEach

let tasksNames = [];
tasks.forEach((tasks) =>{
  tasksNames.push(tasks.name);

})

//REFACTORIZACIÖN DE FOREACH
let tasksNames = [];
tasks.forEach(tasks => tasksNames.push(tasks.name));

//MAP

const tasksNames = tasks.map((tasks)=>{
  return tasks.name;
})
//el nombre del parametro debe ser el mismo que el que va a retornar. 
//parametro.propiedad

//REFACTORIZACIÓN DE MAP

const tasksNames = tasks.map(tasks => tasks.name);



// meter en otro arreglo los objetos completos que demoraron más de 2 horas
//Calcular las duraciones mayor o igual de 120 min, la agarre y la pushee a un arreglo nuevo

//Primera forma forEach:

let difficultTasks = [];

tasks.forEach((element)=>{
  if (element.duration >= 120) {
    difficultTasks.push(element);
  }
});

//Filter (crea una copia, un arreglo nuevo con el filtro en su interior)

const difficultTasks = tasks.filter((index)=>{
  return index.duration >= 120;
});

//Refactorización de filter

const difficultTasks = tasks.filter(index => index.duration >= 120);

const easyTasks = tasks.filter(index => index.duration <= 120);

//REDUCE:(solo devuelve un elemento)(NO UN ARREGLO)

//para sumar duracion comleta de todas las tareas, iterar,sacar la duración, sumarla y guardarla en alfún lado en arreglo lado
///635

// luego usar map esto va a devolver [40, 120, 15, 300, 40, 120] debe iterar sobre tasks
const tasksDuration = tasks.map((element)=>{
  //parametro.propiedad
  return element.duration;
}).reduce((previousValue, currentValue)=>{
  return previousValue + currentValue;
});

//SPREAD OPERATOR ...  ESTE HACE: 

let arr = [1, 2, 3]
const addition = (num1, num2, num3) => {
console.log( num1 + num2 + num3)
}
addition(...arr)

// y da resultado 

let arr1 = [1, 2, 3];
let arr2 = [0, ...arr1, 4, 5, 6];
//en console queda: [0, 1, 2, 3, 4, 5, 6];

