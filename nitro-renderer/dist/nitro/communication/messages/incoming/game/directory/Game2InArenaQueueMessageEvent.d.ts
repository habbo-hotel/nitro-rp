import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { Game2InArenaQueueMessageParser } from '../../../parser';
export declare class Game2InArenaQueueMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): Game2InArenaQueueMessageParser;
}
