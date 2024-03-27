import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { OpenPetPackageRequestedMessageParser } from './../../parser';
export declare class OpenPetPackageRequestedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): OpenPetPackageRequestedMessageParser;
}
