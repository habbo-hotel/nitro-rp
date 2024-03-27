import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ModeratorActionResultMessageParser implements IMessageParser {
    private _userId;
    private _success;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userId(): number;
    get success(): boolean;
}
