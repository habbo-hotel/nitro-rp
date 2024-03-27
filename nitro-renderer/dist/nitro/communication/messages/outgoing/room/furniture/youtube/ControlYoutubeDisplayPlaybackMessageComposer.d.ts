import { IMessageComposer } from '../../../../../../../api';
export declare class ControlYoutubeDisplayPlaybackMessageComposer implements IMessageComposer<ConstructorParameters<typeof ControlYoutubeDisplayPlaybackMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
