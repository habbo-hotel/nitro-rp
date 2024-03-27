import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class FlatControllerRemovedParser implements IMessageParser {
    private _roomId;
    private _userId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get userId(): number;
}
