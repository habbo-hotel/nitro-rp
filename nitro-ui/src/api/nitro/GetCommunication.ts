import { INitroCommunicationManager } from '@nitro-rp/renderer';
import { GetNitroInstance } from './GetNitroInstance';

export function GetCommunication(): INitroCommunicationManager
{
    return GetNitroInstance()?.communication;
}
