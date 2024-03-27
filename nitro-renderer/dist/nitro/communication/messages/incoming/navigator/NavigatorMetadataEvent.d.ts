import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NavigatorMetadataParser } from '../../parser';
export declare class NavigatorMetadataEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NavigatorMetadataParser;
}
