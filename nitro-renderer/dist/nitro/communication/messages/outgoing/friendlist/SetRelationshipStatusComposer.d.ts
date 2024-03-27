import { IMessageComposer } from '../../../../../api';
export declare class SetRelationshipStatusComposer implements IMessageComposer<ConstructorParameters<typeof SetRelationshipStatusComposer>> {
    private _data;
    constructor(userId: number, relationship: number);
    getMessageArray(): [userId: number, relationship: number];
    dispose(): void;
}
