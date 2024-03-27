import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { TriggerDefinition } from './TriggerDefinition';
export declare class WiredFurniTriggerParser implements IMessageParser {
    private _definition;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get definition(): TriggerDefinition;
}
