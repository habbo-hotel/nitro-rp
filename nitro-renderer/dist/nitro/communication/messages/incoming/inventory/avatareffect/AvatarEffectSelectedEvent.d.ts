import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AvatarEffectSelectedParser } from '../../../parser';
export declare class AvatarEffectSelectedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AvatarEffectSelectedParser;
}
