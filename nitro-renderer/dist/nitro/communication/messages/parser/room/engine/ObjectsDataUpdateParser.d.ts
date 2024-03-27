import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { ObjectData } from './ObjectData';
export declare class ObjectsDataUpdateParser implements IMessageParser {
    private _objects;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get objects(): ObjectData[];
}
