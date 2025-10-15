// profesor.ts
/**
 * 4. Clase Profesor (Hereda de Empleado)
 * Atributos adicionales: departamento.
 */
class Profesor extends Empleado {
    public departamento: string;

    constructor(nombre: string, apellidos: string, numIdentificacion: string, estadoCivil: string, 
                 añoIncorporacion: number, numDespacho: string, departamento: string) {
        super(nombre, apellidos, numIdentificacion, estadoCivil, añoIncorporacion, numDespacho);
        this.departamento = departamento;
    }

    public cambiarDepartamento(nuevoDepartamento: string): void {
        /** Método para asignar un nuevo departamento al profesor. */
        this.departamento = nuevoDepartamento;
        console.log(`✅ Profesor ${this.nombre} trasladado al departamento: ${nuevoDepartamento}.`);
    }

    public toString(): string {
        /** Muestra la información de profesor, sobrescribiendo el tipo. */
        let empleadoStr = super.toString().replace("Tipo: Empleado", "Tipo: Profesor");
        return `👨‍🏫 ${empleadoStr} | Departamento: ${this.departamento}`;
    }
}