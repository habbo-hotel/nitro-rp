import { IRoomObject } from '../../api';
import { RoomObjectFurnitureActionEvent } from './RoomObjectFurnitureActionEvent';
export declare class RoomObjectPlaySoundIdEvent extends RoomObjectFurnitureActionEvent {
    static PLAY_SOUND: string;
    static PLAY_SOUND_AT_PITCH: string;
    private _soundId;
    private _pitch;
    constructor(type: string, object: IRoomObject, soundId: string, pitch?: number);
    get soundId(): string;
    get pitch(): number;
}
