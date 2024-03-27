import { IMessageDataWrapper } from '../../../../../api';
import { ILandingPageUserEntry } from './ILandingPageUserEntry';
export declare class HallOfFameEntryData implements ILandingPageUserEntry {
    private _userId;
    private _userName;
    private _figure;
    private _rank;
    private _currentScore;
    constructor(wrapper: IMessageDataWrapper);
    get userId(): number;
    get userName(): string;
    get figure(): string;
    get rank(): number;
    get currentScore(): number;
}
