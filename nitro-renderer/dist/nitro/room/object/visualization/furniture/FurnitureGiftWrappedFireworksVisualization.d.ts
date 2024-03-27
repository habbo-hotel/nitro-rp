import { IRoomGeometry } from '../../../../../api';
import { FurnitureFireworksVisualization } from './FurnitureFireworksVisualization';
export declare class FurnitureGiftWrappedFireworksVisualization extends FurnitureFireworksVisualization {
    private static PRESENT_DEFAULT_STATE;
    private static MAX_PACKET_TYPE_VALUE;
    private static MAX_RIBBON_TYPE_VALUE;
    private _packetType;
    private _ribbonType;
    private _lastAnimationId;
    update(geometry: IRoomGeometry, time: number, update: boolean, skipUpdate: boolean): void;
    private updatePresentWrap;
    getFrameNumber(scale: number, layerId: number): number;
    getSpriteAssetName(scale: number, layerId: number): string;
    protected setAnimation(animationId: number): void;
}
