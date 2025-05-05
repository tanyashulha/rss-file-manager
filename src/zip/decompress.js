import { createReadStream, createWriteStream } from 'fs';
import { Messages } from '../constants/messages.js';
import { createBrotliDecompress } from 'zlib';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';
import path from 'path';

export const decompressFile = async ([ filePath, folderPath ]) => {
    try {
        const fd = createReadStream(filePath);
        const arr = filePath.split('/');
        const fileName = arr[arr.length - 1];
        const pathToDecompress = path.resolve(`${folderPath}/${fileName.substring(0, fileName.indexOf('.'))}.br`);
        const wrS = createWriteStream(pathToDecompress);
        const brotli = createBrotliDecompress();

        await fd.pipe(brotli).pipe(wrS);
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}