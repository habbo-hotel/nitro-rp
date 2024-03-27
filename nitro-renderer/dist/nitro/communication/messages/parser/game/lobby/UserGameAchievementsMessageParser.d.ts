import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserGameAchievementsMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
