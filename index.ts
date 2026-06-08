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

let tareas: string[] = [];
let mensaje: string = `
==================================
opciones del sistema
1:agregar tarea
2:eliminar ultima tarea
3:listar tareass
4:salir
==================================
`;
let answer = "";
do {
  answer = await rl.question(mensaje);
  switch (answer) {
    case "1":
      let tareita: string = await rl.question("ingresa la nueva tarea");
      tareas.push(tareita);
      break;
    case "2":
      if (tareas.length > 0) {
        console.log(tareas.pop());
      } else {
        console.log("no quedan tareas");
      }

      break;
    case "3":
      for (let index = 0; index < tareas.length; index++) {
        console.log(`la tarea ${tareas[index]} esta en la pocision ${index}`);
      }
      break;
    case "4":
      console.log("Hasta luego");
      break;
    default:
      console.log("ingresa una opcion valida");
  }
} while (answer !== "4");

rl.close();
