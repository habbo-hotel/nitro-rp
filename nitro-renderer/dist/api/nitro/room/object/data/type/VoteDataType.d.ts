import { IMessageDataWrapper } from '../../../../../communication';
import { IRoomObjectModel } from '../../../../../room';
import { IObjectData } from '../IObjectData';
import { ObjectDataBase } from '../ObjectDataBase';
export declare class VoteDataType extends ObjectDataBase {
    static FORMAT_KEY: number;
    private _state;
    private _result;
    constructor();
    parseWrapper(wrapper: IMessageDataWrapper): void;
    writeRoomObjectModel(model: IRoomObjectModel): void;
    getLegacyString(): string;
    compare(data: IObjectData): boolean;
    setString(state: string): void;
    get result(): number;
}
