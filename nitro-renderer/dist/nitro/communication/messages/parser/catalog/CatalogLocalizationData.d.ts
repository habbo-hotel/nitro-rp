import { IMessageDataWrapper } from '../../../../../api';
export declare class CatalogLocalizationData {
    private _images;
    private _texts;
    constructor(wrapper: IMessageDataWrapper);
    get images(): string[];
    get texts(): string[];
}
