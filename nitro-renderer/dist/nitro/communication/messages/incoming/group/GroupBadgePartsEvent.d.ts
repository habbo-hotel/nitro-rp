import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupBadgePartsParser } from '../../parser';
export declare class GroupBadgePartsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupBadgePartsParser;
}
