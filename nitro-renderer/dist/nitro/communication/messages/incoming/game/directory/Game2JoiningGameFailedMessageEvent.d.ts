import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { Game2JoiningGameFailedMessageParser } from '../../../parser';
export declare class Game2JoiningGameFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): Game2JoiningGameFailedMessageParser;
}
