import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { TargetedOfferData } from './TargetedOfferData';
export declare class TargetedOfferParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): TargetedOfferData;
}
