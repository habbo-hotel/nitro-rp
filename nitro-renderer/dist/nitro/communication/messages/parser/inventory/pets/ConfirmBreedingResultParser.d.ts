import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class ConfirmBreedingResultParser implements IMessageParser {
    private _breedingNestStuffId;
    private _result;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get breedingNestStuffId(): number;
    get result(): number;
}
