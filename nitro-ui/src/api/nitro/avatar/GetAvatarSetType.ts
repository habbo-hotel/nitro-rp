import { ISetType } from '@nitro-rp/renderer';
import { GetAvatarRenderManager } from './GetAvatarRenderManager';

export function GetAvatarSetType(setType: string): ISetType
{
    return GetAvatarRenderManager().structureData.getSetType(setType);
}
