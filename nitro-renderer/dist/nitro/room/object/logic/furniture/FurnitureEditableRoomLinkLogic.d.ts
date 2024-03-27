import { IAssetData } from '../../../../../api';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureEditableRoomLinkLogic extends FurnitureLogic {
    private _timer;
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    protected onDispose(): void;
    private setAutomaticStateIndex;
    useObject(): void;
}
