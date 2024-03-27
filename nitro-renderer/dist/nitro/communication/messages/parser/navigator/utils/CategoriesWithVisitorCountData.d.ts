import { IMessageDataWrapper } from '../../../../../../api';
export declare class CategoriesWithVisitorCountData {
    private _categoryToCurrentUserCountMap;
    private _categoryToMaxUserCountMap;
    constructor(k: IMessageDataWrapper);
    get categoryToCurrentUserCountMap(): Map<number, number>;
    get categoryToMaxUserCountMap(): Map<number, number>;
}
