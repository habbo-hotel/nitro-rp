import { IMessageDataWrapper } from '../../../../../api';
export declare class AcceptFriendFailerData {
    private _senderId;
    private _errorCode;
    constructor(wrapper: IMessageDataWrapper);
    get senderId(): number;
    get errorCode(): number;
}
