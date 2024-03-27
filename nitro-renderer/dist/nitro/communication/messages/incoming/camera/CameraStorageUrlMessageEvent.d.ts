import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CameraStorageUrlMessageParser } from '../../parser';
export declare class CameraStorageUrlMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CameraStorageUrlMessageParser;
}
