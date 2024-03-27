import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { Game2AccountGameStatusMessageParser } from '../../../parser';
export declare class Game2AccountGameStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): Game2AccountGameStatusMessageParser;
}
