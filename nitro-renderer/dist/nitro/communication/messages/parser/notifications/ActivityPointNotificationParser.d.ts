import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ActivityPointNotificationParser implements IMessageParser {
    private _amount;
    private _amountChanged;
    private _type;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get amount(): number;
    get amountChanged(): number;
    get type(): number;
}
