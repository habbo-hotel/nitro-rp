import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { Game2StartingGameFailedMessageParser } from '../../../parser';
export declare class Game2StartingGameFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): Game2StartingGameFailedMessageParser;
}
