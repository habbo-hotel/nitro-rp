import { IAssetData } from '../../../../../api';
import { RoomObjectLogicBase, RoomObjectUpdateMessage } from '../../../../../room';
export declare class TileCursorLogic extends RoomObjectLogicBase {
    private static CURSOR_VISIBLE_STATE;
    private static CURSOR_HIDDEN_STATE;
    private static CURSOR_HEIGHT_STATE;
    private _lastEventId;
    private _isHidden;
    constructor();
    initialize(data: IAssetData): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
}
