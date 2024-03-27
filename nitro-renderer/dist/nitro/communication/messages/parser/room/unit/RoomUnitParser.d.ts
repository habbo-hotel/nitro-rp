import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { UserMessageData } from './UserMessageData';
export declare class RoomUnitParser implements IMessageParser {
    private _users;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    private resolveSex;
    private convertSwimFigure;
    get users(): UserMessageData[];
}
