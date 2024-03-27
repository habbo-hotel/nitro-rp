import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CameraSnapshotMessageParser } from '../../parser';
export declare class CameraSnapshotMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CameraSnapshotMessageParser;
}
