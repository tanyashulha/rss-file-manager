import { copyFile } from 'fs/promises';
import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';

export const copyFileTo = async ([ fileName, folderPath ]) => {
    try {
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}