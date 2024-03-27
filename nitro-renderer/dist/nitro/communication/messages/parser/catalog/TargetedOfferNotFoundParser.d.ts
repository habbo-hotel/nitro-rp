import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class TargetedOfferNotFoundParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
