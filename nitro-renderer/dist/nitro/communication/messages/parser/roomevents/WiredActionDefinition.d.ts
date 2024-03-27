import { IMessageDataWrapper } from '../../../../../api';
import { Triggerable } from './Triggerable';
export declare class WiredActionDefinition extends Triggerable {
    private _type;
    private _delayInPulses;
    private _conflictingTriggers;
    constructor(wrapper: IMessageDataWrapper);
    get type(): number;
    get code(): number;
    get delayInPulses(): number;
    get conflictingTriggers(): number[];
}
