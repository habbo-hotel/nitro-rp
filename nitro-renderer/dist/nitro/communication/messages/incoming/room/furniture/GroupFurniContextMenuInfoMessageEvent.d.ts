import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { GroupFurniContextMenuInfoMessageParser } from '../../../parser';
export declare class GroupFurniContextMenuInfoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupFurniContextMenuInfoMessageParser;
}
