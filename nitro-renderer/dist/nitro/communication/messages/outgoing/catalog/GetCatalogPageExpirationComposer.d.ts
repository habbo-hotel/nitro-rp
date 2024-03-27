import { IMessageComposer } from '../../../../../api';
export declare class GetCatalogPageExpirationComposer implements IMessageComposer<ConstructorParameters<typeof GetCatalogPageExpirationComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
