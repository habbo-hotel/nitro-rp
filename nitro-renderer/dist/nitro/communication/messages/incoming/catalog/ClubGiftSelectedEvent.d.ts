import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ClubGiftSelectedParser } from '../../parser';
export declare class ClubGiftSelectedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ClubGiftSelectedParser;
}
