import { IRoomObjectModel } from '../../../../../api';
import { FurnitureRoomBrandingLogic } from './FurnitureRoomBrandingLogic';
export declare class FurnitureRoomBillboardLogic extends FurnitureRoomBrandingLogic {
    constructor();
    protected getAdClickUrl(model: IRoomObjectModel): string;
    protected handleAdClick(objectId: number, objectType: string, clickUrl: string): void;
}
