import { IMessageDataWrapper } from '../../../../../communication';
import { IRoomObjectModel } from '../../../../../room';
import { IObjectData } from '../IObjectData';
import { ObjectDataBase } from '../ObjectDataBase';
export declare class MapDataType extends ObjectDataBase {
    static FORMAT_KEY: number;
    private static STATE;
    private static RARITY;
    private _data;
    constructor();
    parseWrapper(wrapper: IMessageDataWrapper): void;
    initializeFromRoomObjectModel(model: IRoomObjectModel): void;
    writeRoomObjectModel(model: IRoomObjectModel): void;
    getLegacyString(): string;
    compare(data: IObjectData): boolean;
    getValue(key: string): string;
    get rarityLevel(): number;
    get data(): {
        [index: string]: string;
    };
}
