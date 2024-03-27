import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FloodControlParser } from '../../../../parser';
export declare class FloodControlEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FloodControlParser;
}
