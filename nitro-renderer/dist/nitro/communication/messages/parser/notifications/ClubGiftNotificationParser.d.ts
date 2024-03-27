import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ClubGiftNotificationParser implements IMessageParser {
    private _numGifts;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get numGifts(): number;
}
