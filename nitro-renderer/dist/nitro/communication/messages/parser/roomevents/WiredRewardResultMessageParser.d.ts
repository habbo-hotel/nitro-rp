import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class WiredRewardResultMessageParser implements IMessageParser {
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get reason(): number;
}
