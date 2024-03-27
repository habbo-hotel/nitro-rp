import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { NavigatorTopLevelContext } from './utils';
export declare class NavigatorMetadataParser implements IMessageParser {
    private _topLevelContexts;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get topLevelContexts(): NavigatorTopLevelContext[];
}
