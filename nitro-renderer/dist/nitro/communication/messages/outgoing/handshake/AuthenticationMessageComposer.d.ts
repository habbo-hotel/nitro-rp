import { IMessageComposer } from '../../../../../api';
export declare class AuthenticationMessageComposer implements IMessageComposer<string[]> {
    private _type;
    private _data;
    constructor(type: string, keys: string[], values: string[]);
    getMessageArray(): string[];
    dispose(): void;
}
