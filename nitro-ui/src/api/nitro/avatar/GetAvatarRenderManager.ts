import { IAvatarRenderManager } from '@nitro-rp/renderer';
import { GetNitroInstance } from '../GetNitroInstance';

export function GetAvatarRenderManager(): IAvatarRenderManager
{
    return GetNitroInstance().avatar;
}
