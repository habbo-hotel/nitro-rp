import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class FlatControllersParser implements IMessageParser {
    private _roomId;
    private _users;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get users(): Map<number, string>;
}
