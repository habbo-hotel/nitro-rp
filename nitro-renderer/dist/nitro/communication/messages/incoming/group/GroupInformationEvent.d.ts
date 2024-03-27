import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupInformationParser } from '../../parser';
export declare class GroupInformationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupInformationParser;
}
