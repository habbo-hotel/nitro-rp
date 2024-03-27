import { IMessageComposer } from '../../../../../../api';
export declare class IgnoreUserComposer implements IMessageComposer<ConstructorParameters<typeof IgnoreUserComposer>> {
    private _data;
    constructor(username: string);
    getMessageArray(): [username: string];
    dispose(): void;
}
