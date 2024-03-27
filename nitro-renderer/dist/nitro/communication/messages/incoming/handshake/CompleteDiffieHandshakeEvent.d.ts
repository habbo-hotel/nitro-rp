import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CompleteDiffieHandshakeParser } from '../../parser';
export declare class CompleteDiffieHandshakeEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CompleteDiffieHandshakeParser;
}
