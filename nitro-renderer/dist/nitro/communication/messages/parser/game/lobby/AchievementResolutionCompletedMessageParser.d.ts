import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class AchievementResolutionCompletedMessageParser implements IMessageParser {
    private _stuffCode;
    private _badgeCode;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get stuffCode(): string;
    get badgeCode(): string;
}
