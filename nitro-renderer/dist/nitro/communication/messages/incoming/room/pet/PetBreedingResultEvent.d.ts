import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetBreedingResultParser } from '../../../parser';
export declare class PetBreedingResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetBreedingResultParser;
}
