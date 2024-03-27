import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { ConfirmBreedingResultParser } from '../../../parser';
export declare class ConfirmBreedingResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ConfirmBreedingResultParser;
}
