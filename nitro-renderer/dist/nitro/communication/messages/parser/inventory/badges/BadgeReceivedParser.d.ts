import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class BadgeReceivedParser implements IMessageParser {
    private _badgeId;
    private _badgeCode;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get badgeId(): number;
    get badgeCode(): string;
}
