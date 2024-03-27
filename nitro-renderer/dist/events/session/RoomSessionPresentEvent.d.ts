import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPresentEvent extends RoomSessionEvent {
    static RSPE_PRESENT_OPENED: string;
    private _classId;
    private _itemType;
    private _productCode;
    private _placedItemId;
    private _placedItemType;
    private _placedInRoom;
    private _petFigureString;
    constructor(k: string, _arg_2: IRoomSession, classId: number, itemType: string, productCode: string, placedItemId: number, placedItemType: string, placedInRoom: boolean, petFigureString: string);
    get classId(): number;
    get itemType(): string;
    get productCode(): string;
    get placedItemId(): number;
    get placedInRoom(): boolean;
    get placedItemType(): string;
    get petFigureString(): string;
}
