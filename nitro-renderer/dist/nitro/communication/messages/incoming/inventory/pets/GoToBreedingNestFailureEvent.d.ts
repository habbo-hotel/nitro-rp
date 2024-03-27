import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { GoToBreedingNestFailureParser } from '../../../parser';
export declare class GoToBreedingNestFailureEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GoToBreedingNestFailureParser;
}
