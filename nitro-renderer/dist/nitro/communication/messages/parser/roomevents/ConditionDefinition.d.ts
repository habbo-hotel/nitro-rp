import { IMessageDataWrapper } from '../../../../../api';
import { Triggerable } from './Triggerable';
export declare class ConditionDefinition extends Triggerable {
    private _type;
    constructor(wrapper: IMessageDataWrapper);
    get type(): number;
    get code(): number;
}
