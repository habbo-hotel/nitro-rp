import { TalentTrackRewardPerk, TalentTrackRewardProduct } from '.';
import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class TalentLevelUpMessageParser implements IMessageParser {
    private _talentTrackName;
    private _level;
    private _rewardPerks;
    private _rewardProducts;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get talentTrackName(): string;
    get level(): number;
    get rewardPerks(): TalentTrackRewardPerk[];
    get rewardProducts(): TalentTrackRewardProduct[];
}
