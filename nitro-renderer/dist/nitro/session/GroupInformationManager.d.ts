import { IDisposable, IGroupInformationManager } from '../../api';
import { SessionDataManager } from './SessionDataManager';
export declare class GroupInformationManager implements IDisposable, IGroupInformationManager {
    private _sessionDataManager;
    private _groupBadges;
    private _messages;
    constructor(sessionDataManager: SessionDataManager);
    init(): void;
    dispose(): void;
    private onRoomReadyMessageEvent;
    private onGroupBadgesEvent;
    getGroupBadge(groupId: number): string;
    get disposed(): boolean;
}
