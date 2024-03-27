import { NitroEvent } from '../../../events';
export declare class SoundManagerEvent extends NitroEvent {
    static TRAX_SONG_COMPLETE: string;
    private _id;
    constructor(type: string, id: number);
    get id(): number;
}
