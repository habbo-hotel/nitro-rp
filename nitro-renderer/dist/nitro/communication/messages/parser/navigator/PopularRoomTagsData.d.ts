import { IMessageDataWrapper } from '../../../../../api';
import { PopularTagData } from './PopularTagData';
export declare class PopularRoomTagsData {
    private _tags;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get tags(): PopularTagData[];
}
