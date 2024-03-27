import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class InitDiffieHandshakeParser implements IMessageParser {
    private _encryptedPrime;
    private _encryptedGenerator;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get encryptedPrime(): string;
    get encryptedGenerator(): string;
}
