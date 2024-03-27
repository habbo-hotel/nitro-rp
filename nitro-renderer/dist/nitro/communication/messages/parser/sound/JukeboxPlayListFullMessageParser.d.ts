import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class JukeboxPlayListFullMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
