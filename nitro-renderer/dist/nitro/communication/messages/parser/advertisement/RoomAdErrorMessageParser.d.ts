import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomAdErrorMessageParser implements IMessageParser {
    private _errorCode;
    private _filteredText;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get errorCode(): number;
    get filteredText(): string;
}
