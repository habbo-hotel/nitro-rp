import { INitroCore } from '@nitro-rp/renderer';
import { GetNitroInstance } from '..';

export function GetNitroCore(): INitroCore
{
    return GetNitroInstance().core;
}
