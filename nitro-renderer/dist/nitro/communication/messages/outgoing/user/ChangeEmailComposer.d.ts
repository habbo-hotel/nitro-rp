import { IMessageComposer } from '../../../../../api';
export declare class ChangeEmailComposer implements IMessageComposer<ConstructorParameters<typeof ChangeEmailComposer>> {
    private _data;
    constructor(newEmail: string);
    getMessageArray(): [newEmail: string];
    dispose(): void;
}
