import { createReadStream } from 'fs';
import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';

export const readAndPrint = async (path) => {
    const readStream = await createReadStream(path, 'utf-8')
        .on('open', () => readStream.pipe(process.stdout))
        .on('close', () => generateCurrentPathMessage(process.cwd()))
        .on('error', () => console.log(Messages.OperationFailed));
}