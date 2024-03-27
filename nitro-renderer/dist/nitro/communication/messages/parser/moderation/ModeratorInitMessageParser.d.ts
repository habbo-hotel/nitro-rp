import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ModeratorInitData } from './ModeratorInitData';
export declare class ModeratorInitMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): ModeratorInitData;
}
