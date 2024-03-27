import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { ConfirmBreedingRequestParser } from '../../../parser';
export declare class ConfirmBreedingRequestEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ConfirmBreedingRequestParser;
}
