import { NitroEvent } from '../../../events';
export declare class NotifyPlayedSongEvent extends NitroEvent {
    static readonly NOTIFY_PLAYED_SONG = "UIEW_NOTIFY_PLAYED_SONG";
    private _name;
    private _creator;
    constructor(name: string, creator: string);
    get name(): string;
    get creator(): string;
}
