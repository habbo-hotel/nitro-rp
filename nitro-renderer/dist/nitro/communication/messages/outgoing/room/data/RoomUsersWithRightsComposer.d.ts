import { IMessageComposer } from '../../../../../../api';
export declare class RoomUsersWithRightsComposer implements IMessageComposer<ConstructorParameters<typeof RoomUsersWithRightsComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
