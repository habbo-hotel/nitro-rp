import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomUnitEffectParser } from '../../../parser';
export declare class RoomUnitEffectEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomUnitEffectParser;
}
