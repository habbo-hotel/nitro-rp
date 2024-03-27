import { IMessageComposer } from '../../../../../api';
export declare class GroupSavePreferencesComposer implements IMessageComposer<ConstructorParameters<typeof GroupSavePreferencesComposer>> {
    private _data;
    constructor(groupId: number, state: number, onlyAdminCanDecorate: number);
    getMessageArray(): [groupId: number, state: number, onlyAdminCanDecorate: number];
    dispose(): void;
}
