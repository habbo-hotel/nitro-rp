import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CallForHelpPendingCallsDeletedMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
