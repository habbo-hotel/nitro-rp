import { IMessageComposer } from '../../../../../api';
export declare class GetFaqCategoryMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetFaqCategoryMessageComposer>> {
    private _data;
    constructor(categoryId: number);
    getMessageArray(): [categoryId: number];
    dispose(): void;
}
