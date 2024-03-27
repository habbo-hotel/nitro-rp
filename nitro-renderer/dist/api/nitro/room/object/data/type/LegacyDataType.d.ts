import { IMessageDataWrapper } from '../../../../../communication';
import { IRoomObjectModel } from '../../../../../room';
import { IObjectData } from '../IObjectData';
import { ObjectDataBase } from '../ObjectDataBase';
export declare class LegacyDataType extends ObjectDataBase implements IObjectData {
    static FORMAT_KEY: number;
    private _data;
    constructor();
    parseWrapper(wrapper: IMessageDataWrapper): void;
    initializeFromRoomObjectModel(model: IRoomObjectModel): void;
    writeRoomObjectModel(model: IRoomObjectModel): void;
    getLegacyString(): string;
    compare(data: IObjectData): boolean;
    setString(data: string): void;
}
