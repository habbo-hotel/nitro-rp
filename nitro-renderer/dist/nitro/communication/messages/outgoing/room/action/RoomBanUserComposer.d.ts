import { IMessageComposer } from '../../../../../../api';
export declare class RoomBanUserComposer implements IMessageComposer<ConstructorParameters<typeof RoomBanUserComposer>> {
    private _data;
    constructor(userId: number, roomId: number, type: string);
    getMessageArray(): [userId: number, roomId: number, type: string];
    dispose(): void;
}
