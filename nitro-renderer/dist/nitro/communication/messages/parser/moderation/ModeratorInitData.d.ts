import { IMessageDataWrapper } from '../../../../../api';
import { IssueMessageData } from './IssueMessageData';
export declare class ModeratorInitData {
    private _messageTemplates;
    private _roomMessageTemplates;
    private _issues;
    private _cfhPermission;
    private _chatlogsPermission;
    private _alertPermission;
    private _kickPermission;
    private _banPermission;
    private _roomAlertPermission;
    private _roomKickPermission;
    private _disposed;
    constructor(wrapper: IMessageDataWrapper);
    dispose(): void;
    get disposed(): boolean;
    get messageTemplates(): string[];
    get roomMessageTemplates(): string[];
    get issues(): IssueMessageData[];
    get cfhPermission(): boolean;
    get chatlogsPermission(): boolean;
    get alertPermission(): boolean;
    get kickPermission(): boolean;
    get banPermission(): boolean;
    get roomAlertPermission(): boolean;
    get roomKickPermission(): boolean;
}
