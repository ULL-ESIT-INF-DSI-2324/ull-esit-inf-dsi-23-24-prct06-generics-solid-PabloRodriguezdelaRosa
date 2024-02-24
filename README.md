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
  - [Informe Coverage](#informe-coverage)
  - [Conclusiones](#conclusiones)
  - [Bibliografía](#bibliografía)


## Introducción

## Ejercicio 1 - La mudanza

Para llevar a cabo el desarrollo de este ejercicio, hemos creado las siguientes clases o interfaces:

1. Interfaz Enser:

    Define una propiedad nombre que representa un artículo de mudanza.

2. Clases de Artículos de Mudanza (Electrodomestico, Herramientas, Mueble, Ropa):

    - Implementan la interfaz Enser.
    - Representan diferentes tipos de artículos de mudanza.
    - Cada clase tiene un constructor que toma el nombre del artículo de mudanza como parámetro.
  
3. Clase Caja<T>:

   - Gestiona una lista de artículos de mudanza.
   - Permite agregar, eliminar, mostrar y buscar artículos en la caja.
   - Utiliza un tipo genérico T que extiende la interfaz Enser, lo que permite la flexibilidad para trabajar con diferentes tipos de artículos.
  
4. Clase Mudanza<T>:

   - Gestiona un conjunto de cajas de mudanza.
   - Permite agregar cajas a la mudanza.
   - Proporciona métodos para manipular los artículos dentro de las cajas, como agregar, eliminar, mostrar y buscar.

Los principios SOLID que se siguen para este ejercicio son:

1. Principio de Responsabilidad Única (SRP):

   - Cada clase y cada interfaz en el código tienen una única responsabilidad clara y bien definida.
   - La interfaz Enser define la propiedad nombre, representando un artículo de mudanza.
   - Las clases Electrodomestico, Herramientas, Mueble y Ropa implementan Enser, centrándose exclusivamente en la representación de cada tipo de artículo.
   - La clase Caja gestiona una lista de artículos de mudanza y proporciona métodos para su manipulación.
   - La clase Mudanza gestiona un conjunto de cajas de mudanza.
  
2. Principio Abierto/Cerrado (OCP):

   - La lógica de negocio de cada clase es extensible sin necesidad de modificar el código existente.
   - La clase Caja puede contener cualquier tipo de artículo de mudanza, permitiendo la adición de nuevos tipos de artículos sin modificar la clase.
   - La clase Mudanza puede gestionar cualquier tipo de caja de mudanza, facilitando su extensión para manejar diferentes tipos de mudanzas.
  
3. Principio de Inversión de Dependencias (DIP):

   - Las clases dependen de abstracciones en lugar de implementaciones concretas.
   - La clase Caja depende de la interfaz Enser para representar los artículos de mudanza, proporcionando flexibilidad para trabajar con diferentes tipos de artículos.
   - La clase Mudanza depende de la clase Caja, pero no está acoplada a una implementación específica, lo que facilita la extensión y el mantenimiento del código.

El código para este ejercicio se encuentra en el directorio `src/ejercicio-1`


## Ejercicio 2 - Facturas en diferentes formatos


Para llevar a cabo el desarrollo de este ejercicio, hemos creado las siguientes clases o interfaces:

1. Interfaz Factura:

   - Define las propiedades necesarias para representar una factura, como el vendedor, el comprador, el importe, el concepto, el tipo de fichero (PDF o HTML), los impuestos, el total y la fecha.

2. Clase Facturacion:

   - Administra un conjunto de facturas.
   - Permite añadir y eliminar facturas, así como mostrarlas en el formato correspondiente (PDF o HTML).

3. Clase Pdf (Factura en formato PDF):

   - Implementa la interfaz Factura.
   - Representa una factura en formato PDF.
   - Tiene métodos para obtener los detalles de la factura y para generarla en formato PDF.

4. Clase Html (Factura en formato HTML):

   - Implementa la interfaz Factura.
   - Representa una factura en formato HTML.
   - Al igual que la clase Pdf, proporciona métodos para obtener los detalles de la factura y para generarla en formato HTML.

El código sigue los principios SOLID de la siguiente manera:

1. Principio de Responsabilidad Única (SRP):

   - Cada clase tiene una única responsabilidad: la interfaz define la estructura de una factura, las clases Pdf y Html implementan esa estructura y la clase Facturacion gestiona la colección de facturas.

2. Principio Abierto/Cerrado (OCP):

   - El código está diseñado para ser extensible. Se pueden añadir nuevos tipos de facturas en el futuro sin necesidad de modificar las clases existentes.

3. Principio de Inversión de Dependencias (DIP):

   - Las clases dependen de abstracciones (la interfaz Factura) en lugar de implementaciones concretas, lo que facilita la extensión y el mantenimiento del código.

El código de este ejercicio se puede encontrar en el directorio `src/ejercici-2`.

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

## Informe Coverage

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-PabloRodriguezdelaRosa/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-PabloRodriguezdelaRosa?branch=main)

## Conclusiones

Durante la realización de la práctica 6 de la asignatura de desarrollo de sistemas informáticos, hemos adquirido conocimientos valiosos sobre herramientas fundamentales en el desarrollo de software. Entre estas herramientas, destacamos el uso de Coverage, que nos permite evaluar el porcentaje de código que está cubierto por nuestros tests, brindándonos una visión clara de la calidad de nuestra suite de pruebas.

Además, como parte de nuestro enfoque continuo en la mejora de la calidad del código, hemos consolidado el uso de herramientas como Typedoc y la metodología TDD (Test-Driven Development), que venimos aplicando desde la práctica 4. Estas herramientas nos permiten documentar nuestro código de manera efectiva y garantizar su correcto funcionamiento mediante la escritura de pruebas automatizadas antes de la implementación del código.

Por otro lado, el desarrollo de esta práctica nos ha permitido profundizar en conceptos fundamentales como los principios SOLID, los cuales nos proporcionan pautas para escribir un código más modular, mantenible y escalable. Asimismo, hemos explorado el uso de clases e interfaces genéricas, que nos brindan una mayor flexibilidad y reutilización de código al trabajar con diferentes tipos de datos de manera más abstracta y eficiente.

## Bibliografía

- [Práctica 6 Clases e interfaces genéricas. Principios SOLID](https://ull-esit-inf-dsi-2324.github.io/prct06-generics-solid/)
- [Principios Solid](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-solid.html)
- [Clases e interfaces genéricas](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-generics.html)