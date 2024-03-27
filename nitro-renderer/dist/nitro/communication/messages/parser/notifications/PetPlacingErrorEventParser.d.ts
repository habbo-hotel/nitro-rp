import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PetPlacingErrorEventParser implements IMessageParser {
    private _errorCode;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get errorCode(): number;
}
