import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ConvertedRoomIdMessageParser implements IMessageParser {
    private _globalId;
    private _convertedId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get globalId(): string;
    get convertedId(): number;
}
