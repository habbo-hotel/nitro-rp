import { IConfigurationManager } from '@nitro-rp/renderer';
import { GetNitroCore } from './GetNitroCore';

export function GetConfigurationManager(): IConfigurationManager
{
    return GetNitroCore().configuration;
}
