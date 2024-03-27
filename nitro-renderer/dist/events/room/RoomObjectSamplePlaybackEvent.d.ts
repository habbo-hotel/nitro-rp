import { IRoomObject } from '../../api';
import { RoomObjectEvent } from './RoomObjectEvent';
export declare class RoomObjectSamplePlaybackEvent extends RoomObjectEvent {
    static ROOM_OBJECT_INITIALIZED: string;
    static ROOM_OBJECT_DISPOSED: string;
    static PLAY_SAMPLE: string;
    static CHANGE_PITCH: string;
    private _sampleId;
    private _pitch;
    constructor(k: string, object: IRoomObject, sampleId: number, pitch?: number);
    get sampleId(): number;
    get pitch(): number;
}
