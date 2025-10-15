// personal-servicio.ts
/**
 * 5. Clase PersonalServicio (Hereda de Empleado)
 * Atributos adicionales: seccion.
 */
class PersonalServicio extends Empleado {
    public seccion: string;

    constructor(nombre: string, apellidos: string, numIdentificacion: string, estadoCivil: string, 
                 añoIncorporacion: number, numDespacho: string, seccion: string) {
        super(nombre, apellidos, numIdentificacion, estadoCivil, añoIncorporacion, numDespacho);
        this.seccion = seccion;
    }

    public reasignarSeccion(nuevaSeccion: string): void {
        /** Método para reasignar la sección de servicio. */
        this.seccion = nuevaSeccion;
        console.log(`✅ Personal de Servicio ${this.nombre} reasignado a sección: ${nuevaSeccion}.`);
    }

    public toString(): string {
        /** Muestra la información de personal de servicio, sobrescribiendo el tipo. */
        let empleadoStr = super.toString().replace("Tipo: Empleado", "Tipo: Personal de Servicio");
        return `🛠️ ${empleadoStr} | Sección: ${this.seccion}`;
    }
}