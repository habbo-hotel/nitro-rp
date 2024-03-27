import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CanCreateRoomEventParser implements IMessageParser {
    private _canCreate;
    private _errorCode;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get canCreate(): boolean;
    get errorCode(): number;
}
