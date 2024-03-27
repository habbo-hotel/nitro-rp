import { IMessageComposer } from '../../../../../../api';
export declare class UserSettingsOldChatComposer implements IMessageComposer<ConstructorParameters<typeof UserSettingsOldChatComposer>> {
    private _data;
    constructor(value: boolean);
    getMessageArray(): [value: boolean];
    dispose(): void;
}
