import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ExtendedForumData } from './ExtendedForumData';
export declare class ForumDataMessageParser implements IMessageParser {
    private _extendedForumData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get extendedForumData(): ExtendedForumData;
}
