import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FurnitureAliasesParser implements IMessageParser {
    private _aliases;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get aliases(): Map<string, string>;
}
