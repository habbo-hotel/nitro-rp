import { IAssetData } from '../../../../../api';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureSoundBlockLogic extends FurnitureMultiStateLogic {
    private static HIGHEST_SEMITONE;
    private static LOWEST_SEMITONE;
    private static STATE_UNINITIALIZED;
    private _state;
    private _sampleId;
    private _noPitch;
    private _lastLocZ;
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    protected onDispose(): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private updateSoundBlockMessage;
    private playSoundAt;
    private getPitchForHeight;
}
