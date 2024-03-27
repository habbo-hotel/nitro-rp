import { IDisposable, IIgnoredUsersManager } from '../../api';
import { SessionDataManager } from './SessionDataManager';
export declare class IgnoredUsersManager implements IDisposable, IIgnoredUsersManager {
    private _sessionDataManager;
    private _ignoredUsers;
    private _messages;
    constructor(sessionDataManager: SessionDataManager);
    init(): void;
    dispose(): void;
    requestIgnoredUsers(): void;
    private onIgnoredUsersEvent;
    private onIgnoreResultEvent;
    private addUserToIgnoreList;
    private removeUserFromIgnoreList;
    ignoreUserId(id: number): void;
    ignoreUser(name: string): void;
    unignoreUser(name: string): void;
    isIgnored(name: string): boolean;
    get disposed(): boolean;
}
