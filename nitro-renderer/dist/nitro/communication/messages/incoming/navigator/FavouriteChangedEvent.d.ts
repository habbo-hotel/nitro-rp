import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FavouriteChangedMessageParser } from '../../parser';
export declare class FavouriteChangedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FavouriteChangedMessageParser;
}
