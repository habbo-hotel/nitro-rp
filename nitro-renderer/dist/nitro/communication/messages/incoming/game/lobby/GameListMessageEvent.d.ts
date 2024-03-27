import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { GameListMessageParser } from '../../../parser';
export declare class GameListMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GameListMessageParser;
}
