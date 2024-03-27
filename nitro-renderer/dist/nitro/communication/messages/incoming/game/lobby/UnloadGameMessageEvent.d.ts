import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UnloadGameMessageParser } from '../../../parser';
export declare class UnloadGameMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UnloadGameMessageParser;
}
