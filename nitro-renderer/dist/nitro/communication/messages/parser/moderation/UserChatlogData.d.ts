import { IMessageDataWrapper } from '../../../../../api';
import { ChatRecordData } from './ChatRecordData';
export declare class UserChatlogData {
    private _userId;
    private _username;
    private _roomChatlogs;
    constructor(wrapper: IMessageDataWrapper);
    get userId(): number;
    get username(): string;
    get roomChatlogs(): ChatRecordData[];
}
