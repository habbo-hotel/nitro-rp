import { IMessageComposer } from '../../../../../api';
export declare class DeleteFavouriteRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof DeleteFavouriteRoomMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
