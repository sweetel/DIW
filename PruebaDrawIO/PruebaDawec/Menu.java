import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Menu {

    public static void main(String[]args) {
   int opcion = 0;
        Scanner sc = new Scanner(System.in);
        List<Estudiante> estudiantes = new ArrayList<>();

        while (opcion != 6) {
            System.out.println("       MENÚ PRINCIPAL           ");
            System.out.println("===============================================");
            System.out.println("1. Insertar Alumno");
            System.out.println("2. Listar Alumnos");
            System.out.println("6. Salir");
            System.out.print("Elige una opción: ");
            
            if (sc.hasNextInt()) {
                opcion = sc.nextInt();
                sc.nextLine(); // consumir nueva línea
            } else {
                System.out.println("Por favor, introduce un número válido.");
                sc.nextLine(); // limpiar entrada inválida
                continue; // continuar con la siguiente iteración
            }

            switch (opcion) {
                case 1:
                    System.out.print("Dime el nombre del estudiante: ");
                    String nombre = sc.nextLine();
                    System.out.print("Dime el apellido: ");
                    String apellido = sc.nextLine();
                    System.out.print("Dime la asignatura: ");
                    String asignatura = sc.nextLine();

                    Estudiante es = new Estudiante(nombre, apellido, asignatura);
                    estudiantes.add(es);
                    System.out.println("Estudiante añadido exitosamente.");
                    break;

                case 2:
                    if (estudiantes.isEmpty()) {
                        System.out.println("No hay estudiantes para mostrar.");
                    } else {
                        System.out.println("Lista de Estudiantes:");
                        for (Estudiante estudiante : estudiantes) {
                            System.out.println(estudiante);
                        }
                    }
                    break;

                case 6:
                    System.out.println("Saliendo del programa...");
                    break;

                default:
                    System.out.println("Opción no válida, por favor intenta de nuevo.");
                    break;
            }
        }
        sc.close(); // cerrar el scanner
    }
}
