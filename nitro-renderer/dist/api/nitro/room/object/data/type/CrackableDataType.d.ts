import { IMessageDataWrapper } from '../../../../../communication';
import { IRoomObjectModel } from '../../../../../room';
import { IObjectData } from '../IObjectData';
import { ObjectDataBase } from '../ObjectDataBase';
export declare class CrackableDataType extends ObjectDataBase implements IObjectData {
    static FORMAT_KEY: number;
    private _state;
    private _hits;
    private _target;
    constructor();
    parseWrapper(wrapper: IMessageDataWrapper): void;
    initializeFromRoomObjectModel(model: IRoomObjectModel): void;
    writeRoomObjectModel(model: IRoomObjectModel): void;
    getLegacyString(): string;
    compare(data: IObjectData): boolean;
    get hits(): number;
    get target(): number;
}
