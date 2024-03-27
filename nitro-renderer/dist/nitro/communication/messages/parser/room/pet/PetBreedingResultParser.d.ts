import { PetBreedingResultData } from '.';
import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class PetBreedingResultParser implements IMessageParser {
    private _resultData;
    private _otherResultData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get resultData(): PetBreedingResultData;
    get otherResultData(): PetBreedingResultData;
}
