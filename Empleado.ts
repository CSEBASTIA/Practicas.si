// empleado.ts
/**
 * 3. Clase Empleado (Clase Intermedia)
 * Hereda de Persona. Base para Profesor y PersonalServicio.
 * Atributos adicionales: añoIncorporacion, numDespacho.
 */
class Empleado extends Persona {
    public añoIncorporacion: number;
    public numDespacho: string;

    constructor(nombre: string, apellidos: string, numIdentificacion: string, estadoCivil: string,
                añoIncorporacion: number, numDespacho: string) {
        super(nombre, apellidos, numIdentificacion, estadoCivil);
        this.añoIncorporacion = añoIncorporacion;
        this.numDespacho = numDespacho;
    }

    public reasignarDespacho(nuevoDespacho: string): void {
        /** Método para reasignar el número de despacho. */
        this.numDespacho = nuevoDespacho;
        console.log(`✅ Despacho reasignado a ${nuevoDespacho} para ${this.nombre}.`);
    }

    public toString(): string {
        /** Muestra la información de empleado. */
        return (
            `${super.toString()} | Tipo: Empleado | ` +
            `Incorporación: ${this.añoIncorporacion} | Despacho: ${this.numDespacho}`
        );
    }
}