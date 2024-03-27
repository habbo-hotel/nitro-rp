import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CameraPublishStatusMessageParser } from '../../parser';
export declare class CameraPublishStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CameraPublishStatusMessageParser;
}
