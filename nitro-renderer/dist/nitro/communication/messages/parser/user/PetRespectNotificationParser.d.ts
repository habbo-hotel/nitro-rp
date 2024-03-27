import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PetData } from '../inventory';
export declare class PetRespectNotificationParser implements IMessageParser {
    private _respect;
    private _petOwnerId;
    private _petData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get respect(): number;
    get petOwnerId(): number;
    get petData(): PetData;
    get isTreat(): boolean;
}
