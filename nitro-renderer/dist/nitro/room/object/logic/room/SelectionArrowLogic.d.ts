import { IAssetData } from '../../../../../api';
import { RoomObjectLogicBase, RoomObjectUpdateMessage } from '../../../../../room';
export declare class SelectionArrowLogic extends RoomObjectLogicBase {
    initialize(data: IAssetData): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
}
