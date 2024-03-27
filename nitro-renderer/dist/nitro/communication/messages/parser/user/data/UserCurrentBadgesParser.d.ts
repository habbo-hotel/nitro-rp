import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserCurrentBadgesParser implements IMessageParser {
    private _userId;
    private _badges;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userId(): number;
    get badges(): string[];
}
