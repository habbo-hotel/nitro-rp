import { IMessageComposer } from '../../../../../api';
export declare class GroupSettingsComposer implements IMessageComposer<ConstructorParameters<typeof GroupSettingsComposer>> {
    private _data;
    constructor(groupId: number);
    getMessageArray(): [groupId: number];
    dispose(): void;
}
