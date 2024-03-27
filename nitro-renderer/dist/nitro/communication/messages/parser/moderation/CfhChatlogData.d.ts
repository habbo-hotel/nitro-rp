import { IMessageDataWrapper } from '../../../../../api';
import { ChatRecordData } from './ChatRecordData';
export declare class CfhChatlogData {
    private _issueId;
    private _callerUserId;
    private _reportedUserId;
    private _chatRecordId;
    private _chatRecord;
    constructor(k: IMessageDataWrapper);
    get issueId(): number;
    get callerUserId(): number;
    get reportedUserId(): number;
    get chatRecordId(): number;
    get chatRecord(): ChatRecordData;
}
