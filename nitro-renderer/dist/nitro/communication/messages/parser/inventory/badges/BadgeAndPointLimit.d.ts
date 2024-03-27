import { IMessageDataWrapper } from '../../../../../../api';
export declare class BadgeAndPointLimit {
    private _badgeId;
    private _limit;
    constructor(k: string, _arg_2: IMessageDataWrapper);
    get badgeId(): string;
    get limit(): number;
}
