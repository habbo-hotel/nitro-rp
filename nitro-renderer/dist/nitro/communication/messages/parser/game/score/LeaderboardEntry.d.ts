import { IMessageDataWrapper } from '../../../../../../api';
export declare class LeaderboardEntry {
    private _userId;
    private _score;
    private _rank;
    private _name;
    private _figure;
    private _gender;
    constructor(k: IMessageDataWrapper);
    get userId(): number;
    get score(): number;
    get rank(): number;
    get figure(): string;
    get gender(): string;
    get name(): string;
}
