import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AvatarEffectsParser } from '../../../parser';
export declare class AvatarEffectsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AvatarEffectsParser;
}
