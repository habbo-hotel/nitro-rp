import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GroupDetailsChangedMessageParser implements IMessageParser {
    private _groupId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groupId(): number;
}
