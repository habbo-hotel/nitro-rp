import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserTagsParser implements IMessageParser {
    private _roomUnitId;
    private _tags;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomUnitId(): number;
    get tags(): string[];
}
