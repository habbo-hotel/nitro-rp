import { IRoomSessionManager } from '@nitro-rp/renderer';
import { GetNitroInstance } from '../GetNitroInstance';

export function GetRoomSessionManager(): IRoomSessionManager
{
    return GetNitroInstance().roomSessionManager;
}
