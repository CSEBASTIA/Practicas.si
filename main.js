// main.ts
// Asegúrate de importar todas las clases si están en archivos separados.
console.log("\n--- EJEMPLOS DE GESTIÓN DE LA FACULTAD ---\n");
// 1. Crear instancias de cada tipo
var profesor1 = new Profesor("Ana", "García", "P123456", "Soltera", 2015, "D201", "Arquitectura");
var estudiante1 = new Estudiante("Juan", "Pérez", "E987654", "Casado", "3º Ingeniería");
var servicio1 = new PersonalServicio("Carlos", "Ruiz", "S543210", "Divorciado", 2020, "D005", "Biblioteca");
console.log("--- INFORMACIÓN INICIAL ---");
console.log(profesor1.toString());
console.log(estudiante1.toString());
console.log(servicio1.toString());
// 2. Ejecutar métodos de acción específicos y heredados
console.log("\n--- ACCIONES / MÉTODOS ---");
// Profesor: métodos de Profesor (cambiarDepartamento) y Persona (cambiarEstadoCivil)
profesor1.cambiarDepartamento("Lenguajes");
profesor1.cambiarEstadoCivil("Casada");
// Estudiante: método de Estudiante
estudiante1.matricularNuevoCurso("4º Ingeniería Avanzada");
// Personal de Servicio: métodos de PersonalServicio (reasignarSeccion) y Empleado (reasignarDespacho)
servicio1.reasignarSeccion("Secretaría");
servicio1.reasignarDespacho("D010");
// 3. Mostrar información actualizada
console.log("\n--- INFORMACIÓN ACTUALIZADA ---");
console.log(profesor1.toString());
console.log(estudiante1.toString());
console.log(servicio1.toString());
