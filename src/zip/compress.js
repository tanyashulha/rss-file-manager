import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import path from 'path';
import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';

export const compressFile = async ([ filePath, folderPath ]) => {
    const fd = createReadStream(filePath);
    const arr = filePath.split('/');
    const fileName = arr[arr.length - 1];
    const pathToCompress = path.resolve(`${folderPath}/${fileName.split('.').splice(1).join('.')}.br`);
    const zip = createWriteStream(pathToCompress);
    const brotli = createBrotliCompress();

    try {
        await fd.pipe(brotli).pipe(zip);
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}