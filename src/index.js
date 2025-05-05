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
import { readAndPrint } from './fs/cat.js';
import { createFile } from './fs/add.js';
import { createDirectory } from './fs/mkdir.js';
import { renameFile } from './fs/rn.js';
import { getCommandProperties } from './utils/command-properties.utils.js';
import { copyFileTo } from './fs/cp.js';
import { removeFile } from './fs/rm.js';
import { moveFile } from './fs/mv.js';
import { getOperSystemInfo } from './osi/os.js';
import { calculateHash } from './hash/hash.js';
import { compressFile } from './zip/compress.js';
import { decompressFile } from './zip/decompress.js';

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
                readAndPrint(getPathTo(currCommand))
                break;
            case Commands.Add:
                createFile(getPathTo(currCommand));
                break;
            case Commands.Mkdir:
                createDirectory(getPathTo(currCommand));
                break;
            case Commands.Rn:
                renameFile(getCommandProperties(currCommand));
                break;
            case Commands.Cp:
                copyFileTo(getCommandProperties(currCommand));
                break;
            case Commands.Rm:
                removeFile(getCommandProperties(currCommand));
                break;
            case Commands.Mv:
                moveFile(getCommandProperties(currCommand));
                break;
            case Commands.Os:
                getOperSystemInfo(getCommandProperties(currCommand));
                break;
            case Commands.Hash:
                calculateHash(getCommandProperties(currCommand));
                break;
            case Commands.Compress:
                compressFile(getCommandProperties(currCommand));
                break;
            case Commands.Decompress:
                decompressFile(getCommandProperties(currCommand));
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