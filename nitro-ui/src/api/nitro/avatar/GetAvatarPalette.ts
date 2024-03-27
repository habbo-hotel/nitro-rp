import { IPalette } from '@nitro-rp/renderer';
import { GetAvatarRenderManager } from './GetAvatarRenderManager';

export function GetAvatarPalette(paletteId: number): IPalette
{
    return GetAvatarRenderManager().structureData.getPalette(paletteId);
}
