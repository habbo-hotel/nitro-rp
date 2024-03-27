import { NitroEvent } from '../../../events';
export declare class NowPlayingEvent extends NitroEvent {
    static readonly NPE_USER_PLAY_SONG = "NPE_USER_PLAY_SONG";
    static readonly NPW_USER_STOP_SONG = "NPW_USER_STOP_SONG";
    static readonly NPE_SONG_CHANGED = "NPE_SONG_CHANGED";
    private _id;
    private _position;
    private _priority;
    constructor(k: string, priority: number, id: number, position: number);
    get id(): number;
    get position(): number;
    get priority(): number;
}
