import { IMessageComposer } from '../../../../../../api';
export declare class UserSettingsRoomInvitesComposer implements IMessageComposer<ConstructorParameters<typeof UserSettingsRoomInvitesComposer>> {
    private _data;
    constructor(value: boolean);
    getMessageArray(): [value: boolean];
    dispose(): void;
}
