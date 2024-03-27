import { IMessageDataWrapper } from '../../../../../communication';
import { IRoomObjectModel } from '../../../../../room';
import { IObjectData } from '../IObjectData';
import { ObjectDataBase } from '../ObjectDataBase';
import { HighScoreData } from './HighScoreData';
export declare class HighScoreDataType extends ObjectDataBase implements IObjectData {
    static FORMAT_KEY: number;
    private _state;
    private _scoreType;
    private _clearType;
    private _entries;
    constructor();
    parseWrapper(wrapper: IMessageDataWrapper): void;
    initializeFromRoomObjectModel(model: IRoomObjectModel): void;
    writeRoomObjectModel(model: IRoomObjectModel): void;
    getLegacyString(): string;
    get entries(): HighScoreData[];
    get clearType(): number;
    get scoreType(): number;
}
