import { NitroEvent } from '../../../events';
export declare class PlayListStatusEvent extends NitroEvent {
    static readonly PLUE_PLAY_LIST_UPDATED = "PLUE_PLAY_LIST_UPDATED";
    static readonly PLUE_PLAY_LIST_FULL = "PLUE_PLAY_LIST_FULL";
    constructor(k: string);
}
