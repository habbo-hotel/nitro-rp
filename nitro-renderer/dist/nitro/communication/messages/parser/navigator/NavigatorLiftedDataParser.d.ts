import { IMessageDataWrapper } from '../../../../../api';
export declare class NavigatorLiftedDataParser {
    private _roomId;
    private _areaId;
    private _image;
    private _caption;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get areaId(): number;
    get image(): string;
    get caption(): string;
}
