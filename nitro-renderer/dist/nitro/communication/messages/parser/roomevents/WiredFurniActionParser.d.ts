import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { WiredActionDefinition } from './WiredActionDefinition';
export declare class WiredFurniActionParser implements IMessageParser {
    private _definition;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get definition(): WiredActionDefinition;
}
