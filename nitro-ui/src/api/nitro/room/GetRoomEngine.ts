import { IRoomEngine } from '@nitro-rp/renderer';
import { GetNitroInstance } from '../GetNitroInstance';

export function GetRoomEngine(): IRoomEngine
{
    return GetNitroInstance().roomEngine;
}
