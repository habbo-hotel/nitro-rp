import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserFigureParser implements IMessageParser {
    private _figure;
    private _gender;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get figure(): string;
    get gender(): string;
}
