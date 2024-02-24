import { Scanner } from "./scanner";
import { Printer } from "./printer";
import { PrinterScanner } from "./printerscanner";

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();