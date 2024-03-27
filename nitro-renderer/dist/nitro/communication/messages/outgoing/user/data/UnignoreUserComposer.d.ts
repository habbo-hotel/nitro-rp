import { IMessageComposer } from '../../../../../../api';
export declare class UnignoreUserComposer implements IMessageComposer<ConstructorParameters<typeof UnignoreUserComposer>> {
    private _data;
    constructor(username: string);
    getMessageArray(): [username: string];
    dispose(): void;
}
