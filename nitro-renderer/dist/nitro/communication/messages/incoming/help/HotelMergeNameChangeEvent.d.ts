import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HotelMergeNameChangeParser } from '../../parser';
export declare class HotelMergeNameChangeEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HotelMergeNameChangeParser;
}
