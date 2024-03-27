import { NitroEvent } from '../../../events';
export declare class SongInfoReceivedEvent extends NitroEvent {
    static readonly SIR_TRAX_SONG_INFO_RECEIVED = "SIR_TRAX_SONG_INFO_RECEIVED";
    private _id;
    constructor(k: string, _arg_2: number);
    get id(): number;
}
