import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { OpenPetPackageResultMessageParser } from './../../parser';
export declare class OpenPetPackageResultMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): OpenPetPackageResultMessageParser;
}
