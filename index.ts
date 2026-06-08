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
rl.close();
