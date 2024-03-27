import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class GameInviteMessageParser implements IMessageParser {
    private _gameTypeId;
    private _inviterId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get inviterId(): number;
}
