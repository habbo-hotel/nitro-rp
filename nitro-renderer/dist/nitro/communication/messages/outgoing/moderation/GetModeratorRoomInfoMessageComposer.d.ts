import { IMessageComposer } from '../../../../../api';
export declare class GetModeratorRoomInfoMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetModeratorRoomInfoMessageComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
