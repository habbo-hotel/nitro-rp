import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FavouritesMessageParser } from '../../parser';
export declare class FavouritesEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FavouritesMessageParser;
}
