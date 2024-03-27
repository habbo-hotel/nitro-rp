import { IAdvancedMap, IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { RelationshipStatusInfo } from './RelationshipStatusInfo';
export declare class RelationshipStatusInfoMessageParser implements IMessageParser {
    private _userId;
    private _relationshipStatusMap;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userId(): number;
    get relationshipStatusMap(): IAdvancedMap<number, RelationshipStatusInfo>;
}
