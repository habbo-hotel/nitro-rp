import { IMessageDataWrapper, IMessageParser, IObjectData } from '../../../../../../api';
export declare class FurnitureDataParser implements IMessageParser {
    private _itemId;
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    static parseObjectData(wrapper: IMessageDataWrapper): IObjectData;
    get furnitureId(): number;
    get objectData(): IObjectData;
}
