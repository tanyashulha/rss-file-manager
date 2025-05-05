import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js'

export const goToFolder = async (pathTo) => {
    try {
        await process.chdir(pathTo);
        await generateCurrentPathMessage(process.cwd());
    } catch (e) {
        console.log(Messages.OperationFailed);
    }
}