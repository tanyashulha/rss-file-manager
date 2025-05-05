import { unlink } from 'fs/promises';
import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js'

export const removeFile = async ([ filePath ]) => {
    try {
        await unlink(filePath);
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}