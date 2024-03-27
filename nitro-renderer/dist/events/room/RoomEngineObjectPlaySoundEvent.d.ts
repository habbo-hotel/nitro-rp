import { RoomEngineObjectEvent } from './RoomEngineObjectEvent';
export declare class RoomEngineObjectPlaySoundEvent extends RoomEngineObjectEvent {
    static PLAY_SOUND: string;
    static PLAY_SOUND_AT_PITCH: string;
    private _soundId;
    private _pitch;
    constructor(type: string, roomId: number, objectId: number, objectCategory: number, soundId: string, pitch?: number);
    get soundId(): string;
    get pitch(): number;
}
