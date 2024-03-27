import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { InitCameraMessageParser } from '../../parser';
export declare class InitCameraMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): InitCameraMessageParser;
}
