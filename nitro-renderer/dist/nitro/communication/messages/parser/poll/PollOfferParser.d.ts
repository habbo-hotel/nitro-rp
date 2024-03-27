import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PollOfferParser implements IMessageParser {
    private _id;
    private _type;
    private _headline;
    private _summary;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get id(): number;
    get type(): string;
    get headline(): string;
    get summary(): string;
}
