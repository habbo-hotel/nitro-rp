import { IMusicController, ISoundManager } from '../../api';
import { NitroManager } from '../../core';
export declare class SoundManager extends NitroManager implements ISoundManager {
    private _volumeSystem;
    private _volumeFurni;
    private _volumeTrax;
    private _internalSamples;
    private _furniSamples;
    private _furnitureBeingPlayed;
    private _musicController;
    constructor();
    onInit(): void;
    onDispose(): void;
    private onEvent;
    private playSample;
    private playInternalSample;
    private playFurniSample;
    private stopInternalSample;
    private stopFurniSample;
    private updateInternalSamplesVolume;
    private updateFurniSamplesVolume;
    get traxVolume(): number;
    get musicController(): IMusicController;
}
