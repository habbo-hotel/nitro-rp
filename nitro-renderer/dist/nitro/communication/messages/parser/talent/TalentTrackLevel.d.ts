import { TalentTrackRewardProduct } from './TalentTrackRewardProduct';
import { TalentTrackTask } from './TalentTrackTask';
export declare class TalentTrackLevel {
    private _level;
    private _state;
    private _tasks;
    private _rewardPerks;
    private _rewardProducts;
    constructor(level: number, state: number, achievements: TalentTrackTask[], perks: string[], items: TalentTrackRewardProduct[]);
    get level(): number;
    get state(): number;
    get tasks(): TalentTrackTask[];
    get perks(): string[];
    get items(): TalentTrackRewardProduct[];
}
