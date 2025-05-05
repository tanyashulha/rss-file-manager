import { readdir } from 'fs/promises';
import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js'

export const printList = async (path) => {
    let arr = await readdir(path, { withFileTypes: true });

    arr = arr.map((el, i) => ({
        index: i,
        name: el.name,
        type: el.isFile() ? 'file' : 'directory',
    }));

    try {
        console.log(arr);
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
} 