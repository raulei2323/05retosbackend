const arthur = {
  nombre: "Arthur",
  apellido: "Morgan",
  edad: 36,
  armas: [
    "Revolver Cattleman",
    "Escopeta de doble barril",
    "Repetidora Litchfield",
  ],
  status: "muerto",
}
let arthurJSON = JSON.stringify(arthur)
console.log(arthurJSON)
