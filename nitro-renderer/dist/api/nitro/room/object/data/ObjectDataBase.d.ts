import { IMessageDataWrapper } from '../../../../communication';
import { IRoomObjectModel } from '../../../../room';
import { IObjectData } from './IObjectData';
export declare class ObjectDataBase implements IObjectData {
    private _flags;
    private _uniqueNumber;
    private _uniqueSeries;
    constructor();
    parseWrapper(wrapper: IMessageDataWrapper): void;
    initializeFromRoomObjectModel(model: IRoomObjectModel): void;
    writeRoomObjectModel(model: IRoomObjectModel): void;
    getLegacyString(): string;
    compare(data: IObjectData): boolean;
    get state(): number;
    get isUnique(): boolean;
    get uniqueNumber(): number;
    set uniqueNumber(number: number);
    get uniqueSeries(): number;
    set uniqueSeries(series: number);
    get rarityLevel(): number;
    get flags(): number;
    set flags(flags: number);
}
