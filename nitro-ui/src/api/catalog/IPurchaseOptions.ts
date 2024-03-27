import { IObjectData } from '@nitro-rp/renderer';

export interface IPurchaseOptions
{
    quantity?: number;
    extraData?: string;
    extraParamRequired?: boolean;
    previewStuffData?: IObjectData;
}
