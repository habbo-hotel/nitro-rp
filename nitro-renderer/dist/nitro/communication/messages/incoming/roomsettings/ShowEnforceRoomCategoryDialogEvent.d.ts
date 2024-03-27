import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ShowEnforceRoomCategoryDialogParser } from '../../parser';
export declare class ShowEnforceRoomCategoryDialogEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ShowEnforceRoomCategoryDialogParser;
}
