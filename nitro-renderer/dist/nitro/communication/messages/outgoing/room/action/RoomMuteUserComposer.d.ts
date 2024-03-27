import { IMessageComposer } from '../../../../../../api';
export declare class RoomMuteUserComposer implements IMessageComposer<ConstructorParameters<typeof RoomMuteUserComposer>> {
    private _data;
    constructor(userId: number, minutes: number, roomId?: number);
    getMessageArray(): [userId: number, minutes: number, roomId?: number];
    dispose(): void;
}
