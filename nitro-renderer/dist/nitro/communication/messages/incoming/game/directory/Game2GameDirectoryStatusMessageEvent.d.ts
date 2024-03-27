import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { Game2GameDirectoryStatusMessageParser } from '../../../parser';
export declare class Game2GameDirectoryStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): Game2GameDirectoryStatusMessageParser;
}
