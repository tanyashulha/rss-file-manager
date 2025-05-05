import { rename } from 'fs/promises';
import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';

export const renameFile = async ([prev, curr], path) => {
    try {
        await rename(prev, curr);
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}