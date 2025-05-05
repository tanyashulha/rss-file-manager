import { EOL, cpus, userInfo, arch } from 'os';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';
import { OSCommands } from '../constants/os-commands.js';
import { Messages } from '../constants/messages.js';

export const getOperSystemInfo = async ([ arg ]) => {
    switch (arg) {
        case OSCommands.EOL:
            console.log(EOL.split(''));
            break;
        case OSCommands.Cpus: 
            console.log(cpus());
            break;
        case OSCommands.Homedir:
            console.log(userInfo().homedir);
            break;
        case OSCommands.Username: 
            console.log(userInfo().username);
            break;
        case OSCommands.Architecture:
            console.log(arch());
            break;
        default:
            console.log(Messages.OperationFailed);
            break;
    }
    
    await generateCurrentPathMessage(process.cwd());
}