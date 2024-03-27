import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CompleteDiffieHandshakeParser implements IMessageParser {
    private _encryptedPublicKey;
    private _serverClientEncryption;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get encryptedPublicKey(): string;
    get serverClientEncryption(): boolean;
}
