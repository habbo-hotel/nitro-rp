import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnbanUserComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnbanUserComposer>> {
    private _data;
    constructor(userId: number, roomId: number);
    getMessageArray(): [userId: number, roomId: number];
    dispose(): void;
}
