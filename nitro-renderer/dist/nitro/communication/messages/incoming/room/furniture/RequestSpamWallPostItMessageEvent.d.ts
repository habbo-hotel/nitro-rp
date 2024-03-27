import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RequestSpamWallPostItMessageParser } from '../../../parser';
export declare class RequestSpamWallPostItMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RequestSpamWallPostItMessageParser;
}
