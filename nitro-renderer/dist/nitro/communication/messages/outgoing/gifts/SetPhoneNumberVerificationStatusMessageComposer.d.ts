import { IMessageComposer } from '../../../../../api';
export declare class SetPhoneNumberVerificationStatusMessageComposer implements IMessageComposer<ConstructorParameters<typeof SetPhoneNumberVerificationStatusMessageComposer>> {
    static readonly NO_ISSUE_ID = -1;
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
