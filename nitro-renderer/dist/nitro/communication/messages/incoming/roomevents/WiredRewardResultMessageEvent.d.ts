import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WiredRewardResultMessageParser } from '../../parser';
export declare class WiredRewardResultMessageEvent extends MessageEvent implements IMessageEvent {
    static PRODUCT_DONATED_CODE: number;
    static BADGE_DONATED_CODE: number;
    constructor(callBack: Function);
    getParser(): WiredRewardResultMessageParser;
}
