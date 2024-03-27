import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NewUserExperienceGiftOfferMessageParser } from '../../parser/nux';
export declare class NewUserExperienceGiftOfferMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NewUserExperienceGiftOfferMessageParser;
}
