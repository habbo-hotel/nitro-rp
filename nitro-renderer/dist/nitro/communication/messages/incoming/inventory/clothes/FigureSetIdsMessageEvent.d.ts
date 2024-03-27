import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FigureSetIdsMessageParser } from '../../../parser';
export declare class FigureSetIdsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FigureSetIdsMessageParser;
}
