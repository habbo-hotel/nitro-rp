import { IMessageComposer } from '../../../../../../api';
export declare class GetUserTagsComposer implements IMessageComposer<ConstructorParameters<typeof GetUserTagsComposer>> {
    private _data;
    constructor(roomUnitId: number);
    getMessageArray(): [roomUnitId: number];
    dispose(): void;
}
