import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { InitDiffieHandshakeParser } from '../../parser';
export declare class InitDiffieHandshakeEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): InitDiffieHandshakeParser;
}
