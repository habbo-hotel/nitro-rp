import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ChangeEmailResultParser } from '../../parser';
export declare class ChangeEmailResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ChangeEmailResultParser;
}
