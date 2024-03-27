import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ClubGiftInfoParser } from '../../parser';
export declare class ClubGiftInfoEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ClubGiftInfoParser;
}
