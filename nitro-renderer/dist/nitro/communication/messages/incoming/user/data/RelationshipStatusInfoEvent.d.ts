import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RelationshipStatusInfoMessageParser } from '../../../parser';
export declare class RelationshipStatusInfoEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RelationshipStatusInfoMessageParser;
}
