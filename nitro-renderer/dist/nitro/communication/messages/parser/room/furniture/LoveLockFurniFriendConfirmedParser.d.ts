import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class LoveLockFurniFriendConfirmedParser implements IMessageParser {
    private _furniId;
    get furniId(): number;
    flush(): boolean;
    parse(packet: IMessageDataWrapper): boolean;
}
