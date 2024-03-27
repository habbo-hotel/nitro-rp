import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GiftWrappingConfigurationParser } from '../../parser';
export declare class GiftWrappingConfigurationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GiftWrappingConfigurationParser;
}
