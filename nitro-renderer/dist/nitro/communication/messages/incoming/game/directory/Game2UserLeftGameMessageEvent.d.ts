import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { Game2UserLeftGameMessageParser } from '../../../parser';
export declare class Game2UserLeftGameMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): Game2UserLeftGameMessageParser;
}
