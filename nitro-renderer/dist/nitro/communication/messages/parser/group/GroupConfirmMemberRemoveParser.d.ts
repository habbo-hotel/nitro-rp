import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GroupConfirmMemberRemoveParser implements IMessageParser {
    private _userId;
    private _furnitureCount;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userId(): number;
    get furnitureCount(): number;
}
