import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomInviteErrorParser implements IMessageParser {
    private _errorCode;
    private _failedRecipients;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get errorCode(): number;
    get failedRecipients(): number[];
}
