import { IRoomCameraWidgetManager } from '@nitro-rp/renderer';
import { GetNitroInstance } from '../GetNitroInstance';

export function GetRoomCameraWidgetManager(): IRoomCameraWidgetManager
{
    return GetNitroInstance().cameraManager;
}
