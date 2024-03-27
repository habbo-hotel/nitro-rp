import { IAssetData } from '../../../../../api';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureChangeStateWhenStepOnLogic extends FurnitureLogic {
    constructor();
    initialize(asset: IAssetData): void;
    tearDown(): void;
    private onRoomToObjectOwnAvatarMoveEvent;
}
