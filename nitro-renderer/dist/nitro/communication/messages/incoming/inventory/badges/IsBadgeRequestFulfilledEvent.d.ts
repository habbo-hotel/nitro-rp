import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { IsBadgeRequestFulfilledParser } from '../../../parser';
export declare class IsBadgeRequestFulfilledEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IsBadgeRequestFulfilledParser;
}
