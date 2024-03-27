import { IRoomGeometry } from '../../../../../api';
import { FurnitureVisualization } from './FurnitureVisualization';
export declare class FurnitureGiftWrappedVisualization extends FurnitureVisualization {
    private _packetType;
    private _ribbonType;
    update(geometry: IRoomGeometry, time: number, update: boolean, skipUpdate: boolean): void;
    private updatePresentWrap;
    getFrameNumber(scale: number, layerId: number): number;
    getSpriteAssetName(scale: number, layerId: number): string;
}
