import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FurnitureStackHeightParser implements IMessageParser {
    private _furniId;
    private _height;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get furniId(): number;
    get height(): number;
}
