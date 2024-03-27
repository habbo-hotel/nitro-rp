import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class WiredOpenParser implements IMessageParser {
    private _stuffId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get stuffId(): number;
}
