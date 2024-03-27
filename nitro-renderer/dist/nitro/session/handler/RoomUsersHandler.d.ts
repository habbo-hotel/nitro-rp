import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class RoomUsersHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onRoomUnitEvent;
    private onRoomUnitInfoEvent;
    private onRoomUnitRemoveEvent;
    private onRoomUnitDanceEvent;
    private onUserCurrentBadgesEvent;
    private onRoomDoorbellEvent;
    private onUserNameChangeMessageEvent;
    private onNewFriendRequestEvent;
    private onPetInfoEvent;
    private onPetStatusUpdateEvent;
    private onPetBreedingMessageEvent;
    private onPetLevelUpdateMessageEvent;
    private onConfirmBreedingResultEvent;
    private onNestBreedingSuccessEvent;
    private onConfirmBreedingRequestEvent;
    private onPetFigureUpdateEvent;
    private onPetBreedingResultEvent;
    private onPetPlacingError;
    private onBotError;
    private onFavoriteMembershipUpdateMessageEvent;
}
