import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class YouAreSpectatorMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
