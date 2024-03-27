import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PetSupplementedNotificationParser implements IMessageParser {
    private _petId;
    private _userId;
    private _supplementType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get petId(): number;
    get userId(): number;
    get supplementType(): number;
}
