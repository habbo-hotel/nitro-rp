import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class GoToBreedingNestFailureParser implements IMessageParser {
    static PET_TOO_TIRED_TO_BREED: number;
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get reason(): number;
}
