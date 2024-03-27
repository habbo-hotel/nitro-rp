import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NewUserExperienceNotCompleteParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
