// let container = document.querySelector("#userscontainer");
// async function fecthUsers() {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         let datos = await response.json();
//         container.innerHTML = "";
//         datos.forEach(element => {
//             container.innerHTML += `<div class="bg-gray-800 p-4 rounded-lg min-w-[350px] min-h-[200px] max-w-md">
//             <h2 class="text-[30px] mb-4">${element.name}</h2>
//             <ul class="list-disc pl-5">
//                 <li class="mb-2">Nombre de usuario:  ${element.username}</li>
//                 <li class="mb-2">Email:  ${element.email}</li>
//                 <li class="mb-2">Empresa:  ${element.company.name}</li>
//             </ul>
//         </div>`;
//         });
//     } catch (error) {
//         console.log("Error al cargar los usuarios. Inténtalo de nuevo más tarde.");
//     }
// }
// fecthUsers();

// async function traerinfo() {
//     try {
//         let response = await fetch(`https://rickandmortyapi.com/api/character`);
//         let datos = await response.json();
//         console.log(datos)
//     } catch (error) {
//         console.log("Error al cargar los usuarios. Inténtalo de nuevo más tarde.");
//     }
// }
// traerinfo()

// container = document.querySelector("#contenedor")
// function pintarTrajeta() {
//     let datospersonajes = traerinfo()
//     console.log(datospersonajes)
//     container.innerHTML = "";
// datospersonajes.forEach(element => {
//     container.innerHTML += `<div class="bg-gray-800 p-4 rounded-lg min-w-[350px] min-h-[200px] max-w-md">
//         <h2 class="text-[30px] mb-4">${element.name}</h2>
//         <ul class="list-disc pl-5">
//             <li class="mb-2">Nombre de usuario:  ${element.username}</li>
//             <li class="mb-2">Email:  ${element.email}</li>
//             <li class="mb-2">Empresa:  ${element.company.name}</li>
//         </ul>
//     </div>`;
// });

// }

// pintarTrajeta()

function tarjetas(n) {
    Container.innerHTML = "";
    for (let i = 0; i < n; i++) {
        container.innerHTML += pintarTarjetas(i)
    }

}

export { tarjetas }