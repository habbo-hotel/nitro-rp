import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class PresentOpenedMessageParser implements IMessageParser {
    private _itemType;
    private _classId;
    private _productCode;
    private _placedItemId;
    private _placedItemType;
    private _placedInRoom;
    private _petFigureString;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemType(): string;
    get classId(): number;
    get productCode(): string;
    get placedItemId(): number;
    get placedItemType(): string;
    get placedInRoom(): boolean;
    get petFigureString(): string;
}
