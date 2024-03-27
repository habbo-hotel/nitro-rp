import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class LoveLockFurniFinishedParser implements IMessageParser {
    private _furniId;
    get furniId(): number;
    flush(): boolean;
    parse(packet: IMessageDataWrapper): boolean;
}
