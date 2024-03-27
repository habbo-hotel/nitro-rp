import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { NodeData } from './NodeData';
export declare class CatalogIndexMessageParser implements IMessageParser {
    private _root;
    private _newAdditionsAvailable;
    private _catalogType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get root(): NodeData;
    get newAdditionsAvailable(): boolean;
    get catalogType(): string;
}
