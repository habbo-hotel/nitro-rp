import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { GameStatusMessageParser } from '../../../parser';
export declare class GameStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GameStatusMessageParser;
}
