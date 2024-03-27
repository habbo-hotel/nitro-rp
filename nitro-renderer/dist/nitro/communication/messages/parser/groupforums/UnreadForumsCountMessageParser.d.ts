import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class UnreadForumsCountMessageParser implements IMessageParser {
    private _count;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get count(): number;
}
