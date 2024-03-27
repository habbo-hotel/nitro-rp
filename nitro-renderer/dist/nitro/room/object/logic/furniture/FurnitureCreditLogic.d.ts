import { IAssetData } from '../../../../../api';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureCreditLogic extends FurnitureLogic {
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    useObject(): void;
}
