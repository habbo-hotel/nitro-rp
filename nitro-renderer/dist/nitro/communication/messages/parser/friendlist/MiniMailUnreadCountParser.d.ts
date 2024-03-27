import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MiniMailUnreadCountParser implements IMessageParser {
    private _count;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get count(): number;
}
