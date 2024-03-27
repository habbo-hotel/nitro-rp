import { IMessageComposer } from '../../../../../api';
export declare class GroupInformationComposer implements IMessageComposer<ConstructorParameters<typeof GroupInformationComposer>> {
    private _data;
    constructor(groupId: number, flag: boolean);
    getMessageArray(): [groupId: number, flag: boolean];
    dispose(): void;
}
