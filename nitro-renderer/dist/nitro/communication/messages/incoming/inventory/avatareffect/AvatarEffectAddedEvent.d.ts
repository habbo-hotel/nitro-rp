import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AvatarEffectAddedParser } from '../../../parser';
export declare class AvatarEffectAddedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AvatarEffectAddedParser;
}
