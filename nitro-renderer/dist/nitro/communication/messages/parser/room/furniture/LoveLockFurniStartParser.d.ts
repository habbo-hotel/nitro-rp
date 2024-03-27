import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class LoveLockFurniStartParser implements IMessageParser {
    private _furniId;
    private _start;
    get furniId(): number;
    get start(): boolean;
    flush(): boolean;
    parse(packet: IMessageDataWrapper): boolean;
}
