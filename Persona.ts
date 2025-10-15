// interface-base.ts
/** Interfaz que define los atributos básicos de cualquier persona. */
interface IPersona {
    nombre: string;
    apellidos: string;
    numIdentificacion: string;
    estadoCivil: string;
}

// persona.ts
/**
 * 1. Clase Persona (Clase Base)
 * Implementa IPersona y contiene los métodos comunes.
 */
class Persona implements IPersona {
    // Definición de atributos de instancia (propiedades de clase)
    public nombre: string;
    public apellidos: string;
    public numIdentificacion: string;
    public estadoCivil: string;

    constructor(nombre: string, apellidos: string, numIdentificacion: string, estadoCivil: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numIdentificacion = numIdentificacion;
        this.estadoCivil = estadoCivil;
    }

    public cambiarEstadoCivil(nuevoEstado: string): void {
        /** Método para cambiar el estado civil. */
        this.estadoCivil = nuevoEstado;
        console.log(`✅ Estado civil de ${this.nombre} actualizado a ${nuevoEstado}.`);
    }

    public toString(): string {
        /** Método para mostrar la información básica. */
        return `👤 ${this.nombre} ${this.apellidos} | ID: ${this.numIdentificacion} | Estado Civil: ${this.estadoCivil}`;
    }
}