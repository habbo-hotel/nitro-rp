import { IMessageComposer } from '../../../../../api';
export declare class RemoveOwnRoomRightsRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof RemoveOwnRoomRightsRoomMessageComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
