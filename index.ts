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
4:completar una tarea
5:ver tareas pendientes
6:ver tareas completadas
7:salir
==================================
`;
interface task {
  id: number;
  title: string;
  completed: boolean;
}

const markCompleted = (id: number) => {
  let found = tareas.find((tarea) => tarea.id === id);
  found ? (found.completed = true) : console.log("el id no existe");
};
const filterPending = (): task[] => {
  let tareasCompletadas = tareas.filter((t) => t.completed === false);
  return tareasCompletadas;
};
const filterCompleted = (): task[] => {
  let tareasIncompletas = tareas.filter((t) => t.completed === true);
  return tareasIncompletas;
};
const saveToDB = (t: task): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`tarea ${t.title} Guardada con exito`);
    }, 2000);
  });
};
let answer = "";
let idContador = 1;

const addTask = async (title: string) => {
  let completed: boolean = false;
  let id: number = idContador;
  idContador++;
  let tareaAgregada: task = {
    id,
    title,
    completed,
  };
  tareas.push(tareaAgregada);
  const respuesta = await saveToDB(tareaAgregada);
  console.log(respuesta);
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
    let Arreglo: string[] = tareas.map(({ id, title, completed }) => {
      if (completed) {
        return `[${id} - ${title} - completed]`;
      } else {
        return `[${id} - ${title} - pending]`;
      }
    });
    Arreglo.forEach((mensaje) => {
      console.log(mensaje);
    });
  } else {
    console.log("no tenemos tareas disponibles");
  }
};
do {
  answer = await rl.question(mensaje);
  switch (answer) {
    case "1":
      let title: string = await rl.question("ingresa el titulo de la tarea");
      await addTask(title);
      break;
    case "2":
      removeTask();
      break;
    case "3":
      listTasks();
      break;
    case "4":
      listTasks();
      let idTarea2: string = await rl.question("ingresa el id de la tarea");
      let idTarea: number = parseInt(idTarea2);
      markCompleted(idTarea);
      break;
    case "5":
      console.log(filterPending());
      break;
    case "6":
      console.log(filterCompleted());
      break;
    case "7":
      console.log("Hasta luego");
      break;
    default:
      console.log("ingresa una opcion valida");
  }
} while (answer !== "7");

rl.close();
