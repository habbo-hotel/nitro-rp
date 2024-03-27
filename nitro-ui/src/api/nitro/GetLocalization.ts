import { INitroLocalizationManager } from '@nitro-rp/renderer';
import { GetNitroInstance } from './GetNitroInstance';

export function GetLocalization(): INitroLocalizationManager
{
    return GetNitroInstance().localization;
}
