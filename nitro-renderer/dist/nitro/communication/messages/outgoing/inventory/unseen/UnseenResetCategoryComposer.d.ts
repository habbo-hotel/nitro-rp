import { IMessageComposer } from '../../../../../../api';
export declare class UnseenResetCategoryComposer implements IMessageComposer<ConstructorParameters<typeof UnseenResetCategoryComposer>> {
    private _data;
    constructor(category: number);
    getMessageArray(): [category: number];
    dispose(): void;
}
