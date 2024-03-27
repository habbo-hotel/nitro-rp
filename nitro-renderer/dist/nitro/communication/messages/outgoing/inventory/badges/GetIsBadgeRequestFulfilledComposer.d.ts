import { IMessageComposer } from '../../../../../../api';
export declare class GetIsBadgeRequestFulfilledComposer implements IMessageComposer<ConstructorParameters<typeof GetIsBadgeRequestFulfilledComposer>> {
    private _data;
    constructor(k: string);
    dispose(): void;
    getMessageArray(): [k: string];
}
