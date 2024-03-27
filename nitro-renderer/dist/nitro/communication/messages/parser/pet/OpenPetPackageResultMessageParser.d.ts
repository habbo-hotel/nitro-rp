import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class OpenPetPackageResultMessageParser implements IMessageParser {
    private _objectId;
    private _nameValidationStatus;
    private _nameValidationInfo;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get objectId(): number;
    get nameValidationStatus(): number;
    get nameValidationInfo(): string;
}
