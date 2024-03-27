import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { CantConnectMessageParser } from '../../../parser';
export declare class RoomEnterErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CantConnectMessageParser;
}
