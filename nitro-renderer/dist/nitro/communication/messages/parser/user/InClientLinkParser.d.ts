import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class InClientLinkParser implements IMessageParser {
    private _link;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get link(): string;
}
