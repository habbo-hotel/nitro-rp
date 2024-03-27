import { IMessageDataWrapper } from '../../../../../../api';
export declare class CompetitionRoomsData {
    private _goalId;
    private _pageIndex;
    private _pageCount;
    constructor(k: IMessageDataWrapper, _arg_2?: number, _arg_3?: number);
    get goalId(): number;
    get pageIndex(): number;
    get pageCount(): number;
}
