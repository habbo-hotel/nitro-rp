import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ElementPointerMessageParser implements IMessageParser {
    private _key;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get key(): string;
}
