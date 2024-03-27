import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PetScratchFailedMessageParser implements IMessageParser {
    private _currentAge;
    private _requiredAge;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get currentAge(): number;
    get requiredAge(): number;
}
