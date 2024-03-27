import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AvatarEffectExpiredParser } from '../../../parser';
export declare class AvatarEffectExpiredEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AvatarEffectExpiredParser;
}
