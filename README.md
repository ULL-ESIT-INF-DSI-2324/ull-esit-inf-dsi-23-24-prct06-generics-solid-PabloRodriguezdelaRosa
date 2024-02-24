# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

- ***Pablo Rodríguez de la Rosa***
- ***alu0101474984***
- ***Grupo PE102***

## Índice 
- [Práctica 6 - Clases e interfaces genéricas. Principios SOLID](#práctica-6---clases-e-interfaces-genéricas-principios-solid)
  - [Índice](#índice)
  - [Introducción](#introducción)
  - [Ejercicio 1 - La mudanza](#ejercicio-1---la-mudanza)
  - [Ejercicio 2 - Facturas en diferentes formatos](#ejercicio-2---facturas-en-diferentes-formatos)
  - [Ejercicio 3 - Gestor de ficheros](#ejercicio-3---gestor-de-ficheros)
  - [Ejercicio 4 - Impresoras y escáneres](#ejercicio-4---impresoras-y-escáneres)
  - [Ejercicio 5 - Servicio de mensajería](#ejercicio-5---servicio-de-mensajería)


## Introducción

## Ejercicio 1 - La mudanza


## Ejercicio 2 - Facturas en diferentes formatos


## Ejercicio 3 - Gestor de ficheros

Para este ejercicio, se nos pide verificar si el código proporcionado por el enunciado sigue los principios SOLID. En este caso podemos apreciar que no es el caso por lo que pasamos a implementar dicho código de manera que siga los principios SOLID.

- Principio de Responsabilidad Única (SRP):

    La interfaz FileManager define métodos para leer y escribir archivos, lo que asegura que la responsabilidad de estas operaciones esté encapsulada en una sola abstracción.
    La clase FileImplementation implementa esta interfaz y se encarga exclusivamente de las operaciones de lectura y escritura de archivos.
    Esto garantiza que cada clase tenga una única razón para cambiar y cumpla con el principio SRP.

- Principio de Abierto/Cerrado (OCP):

    El diseño permite la extensión sin modificar el código existente. Si se desea agregar una nueva implementación de FileManager, simplemente se debe implementar la interfaz FileManager sin modificar las clases existentes.
    Esto facilita la extensión del sistema sin alterar su comportamiento previo, cumpliendo así con el principio OCP.

- Principio de Sustitución de Liskov (LSP):

    La clase FileImplementation implementa la interfaz FileManager.
    La clase FilesReaderWritter depende de la interfaz FileManager en lugar de la implementación concreta (FileImplementation).
    Esto garantiza que las instancias de FilesReaderWritter puedan trabajar con cualquier objeto que implemente FileManager sin afectar el comportamiento del programa, cumpliendo así con el principio LSP.

- Principio de Inversión de Dependencias (DIP):

    La clase FilesReaderWritter depende de la abstracción FileManager en lugar de la implementación concreta (FileImplementation).
    Esto reduce el acoplamiento y facilita la extensión y el mantenimiento del código, ya que las clases de alto nivel no dependen de las implementaciones concretas de las clases de bajo nivel, cumpliendo así con el principio DIP.

Los ficheros se pueden observar en el directorio: `src/ejercicio-3`

## Ejercicio 4 - Impresoras y escáneres


Para pasar el código proporcionado en el enunciado de manera que estos sigan los principios SOLID,  se han realizado varias modificaciones para cumplir con los dichos principios:

- Interfaz Segregation Principle (ISP):

    Se han creado dos interfaces separadas, Printable y Scannable, cada una con un único método relacionado con su responsabilidad específica (print y scan, respectivamente).
    Esto asegura que las clases solo dependan de las interfaces que necesitan y no se vean obligadas a depender de métodos que no utilizan, cumpliendo así con el ISP.

- Single Responsibility Principle (SRP):

    Cada clase (Printer, Scanner y PrinterScanner) tiene una única responsabilidad relacionada con su función específica.
    La clase Printer es responsable de imprimir, la clase Scanner es responsable de escanear y la clase PrinterScanner es responsable de ambas funciones.
    Esto asegura que cada clase tenga una única razón para cambiar, cumpliendo así con el SRP.

- Inversion of Control Principle (IoC) / Dependency Inversion Principle (DIP):

    Las clases Printer, Scanner y PrinterScanner dependen de las interfaces (Printable y Scannable) en lugar de implementaciones concretas.
    Esto permite una mayor flexibilidad al permitir que las implementaciones de Printable y Scannable se intercambien sin afectar a las clases que las utilizan, cumpliendo así con el principio de Inversión de Control / Dependencia.

Los ficheros se pueden observar en el directorio: `src/ejercicio-4`

## Ejercicio 5 - Servicio de mensajería

- Principio de Responsabilidad Única (SRP):

    Cada clase (EmailService, ShortMessageService y Notifier) tiene una única responsabilidad relacionada con su función específica.
    La clase EmailService se encarga de enviar notificaciones por correo electrónico.
    La clase ShortMessageService se encarga de enviar notificaciones por SMS.
    La clase Notifier se encarga de enviar notificaciones utilizando el servicio de notificación proporcionado.

- Principio de Abierto/Cerrado (OCP):

    El diseño permite la extensión sin modificar el código existente. Si se desea agregar un nuevo tipo de servicio de notificación, simplemente se debe implementar la interfaz NotificationService sin modificar las clases existentes.
    Esto facilita la extensión del sistema sin alterar su comportamiento previo, cumpliendo así con el principio OCP.

- Principio de Sustitución de Liskov (LSP):

    Las clases EmailService y ShortMessageService implementan la interfaz NotificationService.
    La clase Notifier depende de la interfaz NotificationService en lugar de las implementaciones concretas (EmailService y ShortMessageService).
    Esto garantiza que las instancias de Notifier puedan trabajar con cualquier objeto que implemente NotificationService sin afectar el comportamiento del programa, cumpliendo así con el principio LSP.

- Principio de Inversión de Dependencias (DIP):

    La clase Notifier depende de una abstracción (NotificationService) en lugar de implementaciones concretas (EmailService y ShortMessageService).
    Esto reduce el acoplamiento y facilita la extensión y el mantenimiento del código, ya que las clases de alto nivel no dependen de las implementaciones concretas de las clases de bajo nivel, cumpliendo así con el principio DIP.

Los ficheros se pueden observar en el directorio: `src/ejercicio-5`