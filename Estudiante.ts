// estudiante.ts
/**
 * 2. Clase Estudiante (Hereda de Persona)
 * Atributos adicionales: curso.
 */
class Estudiante extends Persona {
    public curso: string;

    constructor(nombre: string, apellidos: string, numIdentificacion: string, estadoCivil: string, curso: string) {
        super(nombre, apellidos, numIdentificacion, estadoCivil);
        this.curso = curso;
    }

    public matricularNuevoCurso(nuevoCurso: string): void {
        /** Método para matricular al estudiante en un nuevo curso. */
        this.curso = nuevoCurso;
        console.log(`✅ Estudiante ${this.nombre} matriculado en curso: ${nuevoCurso}.`);
    }

    public toString(): string {
        /** Muestra la información de estudiante. */
        return `📚 ${super.toString()} | Tipo: Estudiante | Curso: ${this.curso}`;
    }
}