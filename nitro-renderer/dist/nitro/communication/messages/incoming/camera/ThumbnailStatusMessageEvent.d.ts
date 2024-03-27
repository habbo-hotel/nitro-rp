import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ThumbnailStatusMessageParser } from '../../parser';
export declare class ThumbnailStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ThumbnailStatusMessageParser;
}
