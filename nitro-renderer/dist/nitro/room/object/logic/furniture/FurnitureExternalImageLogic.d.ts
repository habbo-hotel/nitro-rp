import { IAssetData } from '../../../../../api';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureExternalImageLogic extends FurnitureMultiStateLogic {
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    useObject(): void;
}
