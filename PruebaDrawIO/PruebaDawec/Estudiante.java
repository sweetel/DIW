
public class Estudiante {

	public Estudiante(String nombre, String apellidos, String asignaturas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.asignaturas = asignaturas;
    }
    
    private String nombre;
    private String apellidos;
    private String asignaturas;
    
    @Override
    public String toString() {
        return "Estudiante [nombre=" + nombre + ", apellidos=" + apellidos + ", asignaturas=" + asignaturas + "]";
    }

}
