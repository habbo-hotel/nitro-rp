import { IMessageDataWrapper } from '../../../../../../api';
export declare class GameRewardWinnerEntry {
    private _name;
    private _figure;
    private _gender;
    private _rank;
    private _score;
    constructor(wrapper: IMessageDataWrapper);
    get name(): string;
    get figure(): string;
    get gender(): string;
    get rank(): number;
    get score(): number;
}
