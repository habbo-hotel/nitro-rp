import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureSoundMachineLogic extends FurnitureMultiStateLogic {
    private _disposeEventsAllowed;
    private _isInitialized;
    private _currentState;
    getEventTypes(): string[];
    protected onDispose(): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private requestInit;
    private requestPlayList;
    private requestStopPlaying;
    private requestDispose;
}
