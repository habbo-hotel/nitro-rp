import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ConditionDefinition } from './ConditionDefinition';
export declare class WiredFurniConditionParser implements IMessageParser {
    private _definition;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get definition(): ConditionDefinition;
}
