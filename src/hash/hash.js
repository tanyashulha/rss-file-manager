import crypto from 'crypto';
import stream from 'stream/promises';
import { Messages } from '../constants/messages.js';
import { generateCurrentPathMessage } from '../utils/current-path-mess.utils.js';
import { createReadStream } from 'fs';

export const calculateHash = async ([ filePath ]) => {
    const fd = createReadStream(filePath);
    const hash = crypto.createHash('sha256');

    try {
        await stream.pipeline(fd, hash);
        console.log(hash.digest('hex'));
        await generateCurrentPathMessage(process.cwd());
    } catch {
        console.log(Messages.OperationFailed);
    }
}