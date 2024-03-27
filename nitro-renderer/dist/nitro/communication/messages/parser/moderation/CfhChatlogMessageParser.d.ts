import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CfhChatlogData } from './CfhChatlogData';
export declare class CfhChatlogMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): CfhChatlogData;
}
