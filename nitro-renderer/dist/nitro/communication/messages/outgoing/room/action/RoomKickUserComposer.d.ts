import { IMessageComposer } from '../../../../../../api';
export declare class RoomKickUserComposer implements IMessageComposer<ConstructorParameters<typeof RoomKickUserComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
