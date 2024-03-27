import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { NewUserExperienceGiftOptions } from '../../incoming/nux';
export declare class NewUserExperienceGiftOfferMessageParser implements IMessageParser {
    private _giftOptions;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get giftOptions(): NewUserExperienceGiftOptions[];
}
