import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserPermissionsParser implements IMessageParser {
    private _clubLevel;
    private _securityLevel;
    private _isAmbassador;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get clubLevel(): number;
    get securityLevel(): number;
    get isAmbassador(): boolean;
}
