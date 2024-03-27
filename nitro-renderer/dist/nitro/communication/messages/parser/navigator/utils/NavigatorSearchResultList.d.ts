import { IMessageDataWrapper } from '../../../../../../api';
import { RoomDataParser } from '../../room';
export declare class NavigatorSearchResultList {
    private _code;
    private _data;
    private _action;
    private _closed;
    private _mode;
    private _rooms;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get code(): string;
    get data(): string;
    get action(): number;
    get closed(): boolean;
    get mode(): number;
    get rooms(): RoomDataParser[];
}
