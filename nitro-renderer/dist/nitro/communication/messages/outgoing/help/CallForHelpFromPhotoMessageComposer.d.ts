import { IMessageComposer } from '../../../../../api';
export declare class CallForHelpFromPhotoMessageComposer implements IMessageComposer<ConstructorParameters<typeof CallForHelpFromPhotoMessageComposer>> {
    private _data;
    constructor(extraData: string, roomId: number, reportedUserId: number, topicId: number, roomObjectId: number);
    getMessageArray(): [extraData: string, roomId: number, reportedUserId: number, topicId: number, roomObjectId: number];
    dispose(): void;
}
