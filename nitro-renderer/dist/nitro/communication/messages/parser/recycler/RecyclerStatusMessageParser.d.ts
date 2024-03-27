import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RecyclerStatusMessageParser implements IMessageParser {
    private _recyclerStatus;
    private _recyclerTimeoutSeconds;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get recyclerStatus(): number;
    get recyclerTimeoutSeconds(): number;
}
