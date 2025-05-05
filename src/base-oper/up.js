import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';
import { Messages } from '../constants/messages.js';

export const goUpperFromCurrent = async (currentPath) => {
    const foldersArr = currentPath.split('/');
    foldersArr.pop();
    const path = foldersArr.length === 1
        ? parse(process.cwd()).root
        : foldersArr.join('/');

    try {
        await process.chdir(path);
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}