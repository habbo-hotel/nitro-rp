import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class Game2UserLeftGameMessageParser implements IMessageParser {
    private _userId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userId(): number;
}
