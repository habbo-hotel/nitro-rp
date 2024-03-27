import { IMessageDataWrapper } from '../../../../../api';
import { Triggerable } from './Triggerable';
export declare class TriggerDefinition extends Triggerable {
    private _triggerConf;
    private _conflictingActions;
    constructor(wrapper: IMessageDataWrapper);
    get code(): number;
    get conflictingActions(): number[];
}
