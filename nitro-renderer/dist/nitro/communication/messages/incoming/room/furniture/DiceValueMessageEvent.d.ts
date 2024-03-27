import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { DiceValueMessageParser } from '../../../parser';
export declare class DiceValueMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): DiceValueMessageParser;
}
