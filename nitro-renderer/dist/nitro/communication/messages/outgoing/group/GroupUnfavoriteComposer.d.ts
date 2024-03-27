import { IMessageComposer } from '../../../../../api';
export declare class GroupUnfavoriteComposer implements IMessageComposer<ConstructorParameters<typeof GroupUnfavoriteComposer>> {
    private _data;
    constructor(groupId: number);
    getMessageArray(): [groupId: number];
    dispose(): void;
}
