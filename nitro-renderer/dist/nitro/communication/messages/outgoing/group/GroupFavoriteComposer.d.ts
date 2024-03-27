import { IMessageComposer } from '../../../../../api';
export declare class GroupFavoriteComposer implements IMessageComposer<ConstructorParameters<typeof GroupFavoriteComposer>> {
    private _data;
    constructor(groupId: number);
    getMessageArray(): [groupId: number];
    dispose(): void;
}
