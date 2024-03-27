import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class TalentTrackLevelMessageParser implements IMessageParser {
    private _talentTrackName;
    private _level;
    private _maxLevel;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get talentTrackName(): string;
    get level(): number;
    get maxLevel(): number;
}
