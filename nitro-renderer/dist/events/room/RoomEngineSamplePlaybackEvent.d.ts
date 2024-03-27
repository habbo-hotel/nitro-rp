import { RoomEngineObjectEvent } from './RoomEngineObjectEvent';
export declare class RoomEngineSamplePlaybackEvent extends RoomEngineObjectEvent {
    static ROOM_OBJECT_INITIALIZED: string;
    static ROOM_OBJECT_DISPOSED: string;
    static PLAY_SAMPLE: string;
    static CHANGE_PITCH: string;
    private _sampleId;
    private _pitch;
    constructor(k: string, roomId: number, objectId: number, objectCategory: number, sampleId: number, pitch?: number);
    get sampleId(): number;
    get pitch(): number;
}
