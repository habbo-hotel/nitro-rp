import { IMessageComposer } from '../../../../../../../api';
export declare class SetYoutubeDisplayPlaylistMessageComposer implements IMessageComposer<ConstructorParameters<typeof SetYoutubeDisplayPlaylistMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: string);
    getMessageArray(): [k: number, _arg_2: string];
    dispose(): void;
}
