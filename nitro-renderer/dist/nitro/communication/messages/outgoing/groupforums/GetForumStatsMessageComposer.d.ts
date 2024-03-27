import { IMessageComposer } from '../../../../../api';
export declare class GetForumStatsMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetForumStatsMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
