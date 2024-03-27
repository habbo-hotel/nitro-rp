import { IMessageDataWrapper } from '../../../../../communication';
import { IRoomObjectModel } from '../../../../../room';
import { IObjectData } from '../IObjectData';
import { ObjectDataBase } from '../ObjectDataBase';
export declare class EmptyDataType extends ObjectDataBase implements IObjectData {
    static FORMAT_KEY: number;
    private _state;
    parseWrapper(wrapper: IMessageDataWrapper): void;
    writeRoomObjectModel(model: IRoomObjectModel): void;
    getLegacyString(): string;
    compare(data: IObjectData): boolean;
}
