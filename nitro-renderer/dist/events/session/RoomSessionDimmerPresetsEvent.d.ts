import { IRoomSession } from '../../api';
import { RoomSessionDimmerPresetsEventPresetItem } from './RoomSessionDimmerPresetsEventPresetItem';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionDimmerPresetsEvent extends RoomSessionEvent {
    static ROOM_DIMMER_PRESETS: string;
    private _selectedPresetId;
    private _presets;
    constructor(type: string, session: IRoomSession);
    storePreset(id: number, type: number, color: number, brightness: number): void;
    getPreset(id: number): RoomSessionDimmerPresetsEventPresetItem;
    get presetCount(): number;
    get selectedPresetId(): number;
    set selectedPresetId(id: number);
}
