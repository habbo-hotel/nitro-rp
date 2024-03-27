import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class FloodControlParser implements IMessageParser {
    private _seconds;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get seconds(): number;
}
