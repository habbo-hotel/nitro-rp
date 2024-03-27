import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { GameInviteMessageParser } from '../../../parser';
export declare class GameInviteMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GameInviteMessageParser;
}
