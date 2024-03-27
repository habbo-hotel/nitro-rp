import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { NestBreedingSuccessParser } from '../../../parser';
export declare class NestBreedingSuccessEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NestBreedingSuccessParser;
}
