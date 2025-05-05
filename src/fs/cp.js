import { copyFile } from 'fs/promises';
import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';

export const copyFileTo = async ([ path, folderPath ]) => {
    const arr = path.split('/');
    const fileName = arr[arr.length - 1];
    const newPath = `${folderPath}/${fileName}`;

    try {
        await copyFile(path, newPath);
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}