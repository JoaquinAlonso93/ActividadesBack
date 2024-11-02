import { promises as fs } from 'fs';
import path from 'path';

const filePath = './info.json'; // Ruta 

async function ReadAndSave() {
    try {
        // Leer el archivo en formato string
        const contenidoStr = await fs.readFile(filePath, 'utf8');

        // Parsea el contenido a objeto
        const contenidoObj = JSON.parse(contenidoStr);

        // Crea el objeto info
        const info = {
            contenidoStr: contenidoStr,
            contenidoObj: contenidoObj,
            size: Buffer.byteLength(contenidoStr, 'utf8')
        };

        // Mostrar el objeto info en consola
        console.log(info);

        // Guarda el objeto info en un archivo info.json
        const infoFilePath = path.join(process.cwd(), 'info.json'); // process.cwd() para obtener el directorio actual
        await fs.writeFile(infoFilePath, JSON.stringify(info, null, 2));

    } catch (err) {
        throw new Error(`Error al procesar el archivo: ${err.message}`);
    }
}

// Ejecutar la función
ReadAndSave();