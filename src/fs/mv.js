import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';
import { copyFileTo } from './cp.js';
import { removeFile } from './rm.js';

export const moveFile = async (path) => {
    try {
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}