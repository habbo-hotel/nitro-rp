import { IMessageComposer } from '../../../../../api';
export declare class AddFavouriteRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof AddFavouriteRoomMessageComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
