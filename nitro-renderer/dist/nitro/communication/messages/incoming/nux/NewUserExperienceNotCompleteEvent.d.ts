import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NewUserExperienceNotCompleteParser } from '../../parser/nux';
export declare class NewUserExperienceNotCompleteEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NewUserExperienceNotCompleteParser;
}
