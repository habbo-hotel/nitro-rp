import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetBreedingMessageParser } from './../../../parser';
export declare class PetBreedingMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetBreedingMessageParser;
}
