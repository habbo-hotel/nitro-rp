import { IMessageComposer } from '../../../../../../api';
export declare class UserRelationshipsComposer implements IMessageComposer<ConstructorParameters<typeof UserRelationshipsComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
