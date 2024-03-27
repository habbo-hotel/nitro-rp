import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FigureUpdateParser } from '../../parser';
export declare class FigureUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FigureUpdateParser;
}
