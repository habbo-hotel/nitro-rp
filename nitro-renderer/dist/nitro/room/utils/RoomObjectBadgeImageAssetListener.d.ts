import { IRoomObjectController } from '../../../api';
export declare class RoomObjectBadgeImageAssetListener {
    private _object;
    private _groupBadge;
    constructor(object: IRoomObjectController, groupBadge: boolean);
    get object(): IRoomObjectController;
    get groupBadge(): boolean;
}
