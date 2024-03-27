import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionEndedMessageParser implements IMessageParser {
    private _endReason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get endReason(): number;
}
