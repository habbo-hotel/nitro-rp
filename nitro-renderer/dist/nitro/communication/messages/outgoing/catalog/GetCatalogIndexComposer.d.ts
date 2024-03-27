import { IMessageComposer } from '../../../../../api';
export declare class GetCatalogIndexComposer implements IMessageComposer<ConstructorParameters<typeof GetCatalogIndexComposer>> {
    private _data;
    constructor(mode: string);
    getMessageArray(): [mode: string];
    dispose(): void;
}
