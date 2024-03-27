import { IMessageComposer } from '../../../../../api';
export declare class WelcomeGiftChangeEmailComposer implements IMessageComposer<ConstructorParameters<typeof WelcomeGiftChangeEmailComposer>> {
    private _data;
    constructor(newEmail: string);
    getMessageArray(): [newEmail: string];
    dispose(): void;
}
