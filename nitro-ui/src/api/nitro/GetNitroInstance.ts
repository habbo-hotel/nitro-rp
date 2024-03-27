import { INitro, Nitro } from '@nitro-rp/renderer';

export function GetNitroInstance(): INitro
{
    return Nitro.instance;
}
