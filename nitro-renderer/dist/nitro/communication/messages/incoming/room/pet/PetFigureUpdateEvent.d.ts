import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetFigureUpdateParser } from '../../../parser';
export declare class PetFigureUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetFigureUpdateParser;
}
