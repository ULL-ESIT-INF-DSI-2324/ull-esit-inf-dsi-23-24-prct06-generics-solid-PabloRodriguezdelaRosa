import { FilesReaderWritter } from './files_reader_writter';

const fileManager = new FilesReaderWritter('example.txt');

// Reading content
const currentContent = fileManager.readFile();
console.log('Current content:', currentContent);

// Writing content
const newData = 'This is new content to be written into the file.'
fileManager.writeFile(newData);

// Updating content
const updatedContent = fileManager.readFile();
console.log('Updated content:', updatedContent);