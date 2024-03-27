import { IMessageComposer } from '../../../../../../api';
export declare class RoomGiveRightsComposer implements IMessageComposer<ConstructorParameters<typeof RoomGiveRightsComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
