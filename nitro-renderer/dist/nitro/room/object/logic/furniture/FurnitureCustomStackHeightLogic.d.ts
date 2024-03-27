import { IAssetData } from '../../../../../api';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureCustomStackHeightLogic extends FurnitureMultiStateLogic {
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    useObject(): void;
}
