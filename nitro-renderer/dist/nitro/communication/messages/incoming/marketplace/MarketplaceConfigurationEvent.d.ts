import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MarketplaceConfigurationMessageParser } from '../../parser';
export declare class MarketplaceConfigurationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MarketplaceConfigurationMessageParser;
}
