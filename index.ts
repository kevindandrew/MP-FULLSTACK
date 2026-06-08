import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "super sistema";
let version: number = 322;
let userName: string = "Kevinadmin";
// 🚫 No eliminar las líneas de abajo ⬇️
let banner = `
==================================
  ${systemName}  v${version}
  ¡Bienvenido, ${userName}!
==================================
`;
console.log(banner);

let tareas: task[] = [];
let mensaje: string = `
==================================
opciones del sistema
1:agregar tarea
2:eliminar ultima tarea
3:listar tareass
4:salir
==================================
`;
interface task {
  id: number;
  title: string;
  completed: boolean;
}

let answer = "";
let idContador = 1;

const addTask = (title: string) => {
  let completed: boolean = false;
  let id: number = idContador;
  idContador++;
  let tareaAgregada: task = {
    id,
    title,
    completed,
  };
  tareas.push(tareaAgregada);
};

const removeTask = () => {
  if (tareas.length > 0) {
    console.log(tareas.pop());
  } else {
    console.log("no quedan tareas");
  }
};
const listTasks = () => {
  if (tareas.length > 0) {
    let estado: string = "";
    for (let index = 0; index < tareas.length; index++) {
      if (tareas[index].completed) {
        estado = "completed";
      } else {
        estado = "pending";
      }
      console.log(`[${tareas[index].id}] ${tareas[index].title} - ${estado}`);
    }
  } else {
    console.log("no tenemos tareas disponibles");
  }
};
do {
  answer = await rl.question(mensaje);
  switch (answer) {
    case "1":
      let title: string = await rl.question("ingresa el titulo de la tarea");
      addTask(title);
      break;
    case "2":
      removeTask();
      break;
    case "3":
      listTasks();
      break;
    case "4":
      console.log("Hasta luego");
      break;
    default:
      console.log("ingresa una opcion valida");
  }
} while (answer !== "4");

rl.close();
