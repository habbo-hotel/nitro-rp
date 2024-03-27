import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WardrobeMessageParser } from '../../parser';
export declare class WardrobeMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WardrobeMessageParser;
}
