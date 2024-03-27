import { IMessageComposer } from '../../../../../../../api';
export declare class GetYoutubeDisplayStatusMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetYoutubeDisplayStatusMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
