import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ChatReviewSessionOfferedToGuideMessageParser implements IMessageParser {
    private _acceptanceTimeout;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get acceptanceTimeout(): number;
}
