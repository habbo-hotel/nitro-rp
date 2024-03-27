import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class OfferRewardDeliveredMessageParser implements IMessageParser {
    private _contentType;
    private _classId;
    private _name;
    private _description;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get contentType(): string;
    get classId(): number;
    get name(): string;
    get description(): string;
}
