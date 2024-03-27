import { IRoomSession, RoomControllerLevel } from '@nitro-rp/renderer';
import { GetSessionDataManager } from '../..';
import { GetRoomEngine } from '../room/GetRoomEngine';
import { IsOwnerOfFurniture } from './IsOwnerOfFurniture';

export function CanManipulateFurniture(roomSession: IRoomSession, objectId: number, category: number): boolean
{
    if(!roomSession) return false;

    return (roomSession.isRoomOwner || (roomSession.controllerLevel >= RoomControllerLevel.GUEST) || GetSessionDataManager().isModerator || IsOwnerOfFurniture(GetRoomEngine().getRoomObject(roomSession.roomId, objectId, category)));
}
