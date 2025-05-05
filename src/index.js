import { generateUsername } from './utils/user-name.utils.js';
import { getCurrCommand } from './utils/curr-command.utils.js';
import { Commands } from './constants/possible-commands.js';
import { Messages } from './constants/messages.js';
import { generateCurrentPathMessage } from './utils/current-path-mess.utils.js';
import { generateExitMessage } from './utils/exit-message.utils.js';
import { generateWelcomeMessage } from './utils/welcome-message.utils.js';
import { goToFolder } from './base-oper/cd.js';
import { getPathTo } from './utils/path-to.utils.js';
import { printList } from './base-oper/ls.js';
import { goUpperFromCurrent } from './base-oper/up.js';

const parseCommandLine = (input) => {
    return input.split(' ');
}

const main = async () => {
    generateWelcomeMessage(generateUsername());

    process.stdin.on('data', (data) => {
        const currCommand = getCurrCommand(data);
        const [cmd, ...args] = parseCommandLine(currCommand);
        const currDir = process.cwd();

        switch (cmd) {
            case Commands.Exit:
                generateExitMessage(generateUsername());
                process.exit();
            case Commands.Up:
                goUpperFromCurrent(currDir);
                break;
            case Commands.Ls:
                printList(currDir);
                break;
            case Commands.Cd:
                goToFolder(getPathTo(currCommand));
                break;
            case Commands.Cat:
                break;
            case Commands.Add:
                break;
            case Commands.Rn:
                break;
            case Commands.Cp:
                break;
            case Commands.Rm:
                break;
            case Commands.Mv:
                break;
            case Commands.Os:
                break;
            case Commands.Hash:
                break;
            case Commands.Compress:
                break;
            case Commands.Decompress:
                break;
            default:
                console.log(Messages.InvalidInput);
                generateCurrentPathMessage(currDir);
        }
    });
  
    process.on('SIGINT', () => {
        generateExitMessage(generateUsername());
        process.exit();
    })
}
  
main();