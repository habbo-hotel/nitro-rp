import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AvatarEffectActivatedParser } from '../../../parser';
export declare class AvatarEffectActivatedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AvatarEffectActivatedParser;
}
