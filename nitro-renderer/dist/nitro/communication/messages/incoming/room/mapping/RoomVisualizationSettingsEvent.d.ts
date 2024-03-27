import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomVisualizationSettingsParser } from '../../../parser';
export declare class RoomVisualizationSettingsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomVisualizationSettingsParser;
}
