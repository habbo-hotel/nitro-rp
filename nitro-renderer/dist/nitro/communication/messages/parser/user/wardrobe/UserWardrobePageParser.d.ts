import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserWardrobePageParser implements IMessageParser {
    private _looks;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get looks(): Map<number, string[]>;
}
