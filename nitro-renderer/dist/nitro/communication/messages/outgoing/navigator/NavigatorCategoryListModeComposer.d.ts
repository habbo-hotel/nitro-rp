import { IMessageComposer } from '../../../../../api';
export declare class NavigatorCategoryListModeComposer implements IMessageComposer<ConstructorParameters<typeof NavigatorCategoryListModeComposer>> {
    private _data;
    constructor(category: string, listmode: number);
    getMessageArray(): [category: string, listmode: number];
    dispose(): void;
}
