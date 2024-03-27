import { IMessageComposer } from '../../../../../api';
export declare class NavigatorDeleteSavedSearchComposer implements IMessageComposer<ConstructorParameters<typeof NavigatorDeleteSavedSearchComposer>> {
    private _data;
    constructor(searchId: number);
    getMessageArray(): [searchId: number];
    dispose(): void;
}
