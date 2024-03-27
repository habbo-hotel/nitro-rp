import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CallForHelpPendingCallsMessageParser implements IMessageParser {
    private _calls;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get pendingCalls(): ICall[];
    get count(): number;
}
export interface ICall {
    callId: string;
    timeStamp: string;
    message: string;
}
