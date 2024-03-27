import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PetTrainingMessageParser } from './../../parser';
export declare class PetTrainingPanelMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetTrainingMessageParser;
}
