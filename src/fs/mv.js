import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';
import { copyFileTo } from './cp.js';
import { unlink } from 'fs/promises';

export const moveFile = async (path) => {
    const [filePath, ...args] = path;
    try {
        await copyFileTo(path);
        await unlink(filePath);
    } catch {
        console.log(Messages.OperationFailed);
    }
}