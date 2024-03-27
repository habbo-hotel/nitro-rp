import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { TalentTrackLevel } from './TalentTrackLevel';
export declare class TalentTrackParser implements IMessageParser {
    private _type;
    private _levels;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get type(): string;
    get levels(): TalentTrackLevel[];
}
