import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { RoomDimmerPresetsMessageData } from './RoomDimmerPresetsMessageData';
export declare class RoomDimmerPresetsMessageParser implements IMessageParser {
    private _selectedPresetId;
    private _presets;
    constructor();
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    getPreset(id: number): RoomDimmerPresetsMessageData;
    get presetCount(): number;
    get selectedPresetId(): number;
}
