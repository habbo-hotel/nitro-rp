import { IFigureSetData } from '../../../api';
import { EventDispatcher } from '../../../core';
export declare class AvatarStructureDownload extends EventDispatcher {
    static AVATAR_STRUCTURE_DONE: string;
    private _dataReceiver;
    constructor(downloadUrl: string, dataReceiver: IFigureSetData);
    private download;
}
