import { IMessageComposer } from '../../../../../api';
export declare class GroupSaveInformationComposer implements IMessageComposer<ConstructorParameters<typeof GroupSaveInformationComposer>> {
    private _data;
    constructor(groupId: number, title: string, description: string);
    getMessageArray(): [groupId: number, title: string, description: string];
    dispose(): void;
}
