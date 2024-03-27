import { IDisposable, IMessageDataWrapper } from '../../../../../api';
import { ModRoomData } from './ModRoomData';
export declare class RoomModerationData implements IDisposable {
    private _flatId;
    private _userCount;
    private _ownerInRoom;
    private _ownerId;
    private _ownerName;
    private _room;
    private _disposed;
    constructor(k: IMessageDataWrapper);
    get flatId(): number;
    get userCount(): number;
    get ownerInRoom(): boolean;
    get ownerId(): number;
    get ownerName(): string;
    get room(): ModRoomData;
    get disposed(): boolean;
    dispose(): void;
}
