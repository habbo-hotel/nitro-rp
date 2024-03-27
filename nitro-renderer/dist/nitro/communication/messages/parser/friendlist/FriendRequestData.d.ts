import { IMessageDataWrapper } from '../../../../../api';
export declare class FriendRequestData {
    private _requestId;
    private _requesterName;
    private _requesterUserId;
    private _figureString;
    constructor(wrapper: IMessageDataWrapper);
    get requestId(): number;
    get requesterName(): string;
    get requesterUserId(): number;
    get figureString(): string;
}
