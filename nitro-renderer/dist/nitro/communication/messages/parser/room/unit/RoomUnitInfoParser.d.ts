import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitInfoParser implements IMessageParser {
    private _unitId;
    private _figure;
    private _gender;
    private _motto;
    private _achievementScore;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
    get figure(): string;
    get gender(): string;
    get motto(): string;
    get achievementScore(): number;
}
