import { IMessageComposer } from '../../../../../api';
export declare class UpdateRoomThumbnailMessageComposer implements IMessageComposer<ConstructorParameters<typeof UpdateRoomThumbnailMessageComposer>> {
    private _data;
    constructor(flatId: number, bgImgId: number, frontImgId: number, objCount: number);
    getMessageArray(): [flatId: number, bgImgId: number, frontImgId: number, objCount: number];
    dispose(): void;
}
