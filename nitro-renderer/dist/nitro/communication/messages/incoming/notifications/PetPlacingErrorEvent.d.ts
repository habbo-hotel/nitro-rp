import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PetPlacingErrorEventParser } from '../../parser';
export declare class PetPlacingErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetPlacingErrorEventParser;
}
