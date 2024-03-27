import { IConnection, IRoomCreator } from '../../api';
import { Disposable } from '../../core';
export declare class RoomMessageHandler extends Disposable {
    private _connection;
    private _roomCreator;
    private _planeParser;
    private _latestEntryTileEvent;
    private _currentRoomId;
    private _ownUserId;
    private _initialConnection;
    private _guideId;
    private _requesterId;
    constructor(roomCreator: IRoomCreator);
    protected onDispose(): void;
    setConnection(connection: IConnection): void;
    setRoomId(id: number): void;
    clearRoomId(): void;
    private onUserInfoEvent;
    private onRoomReadyMessageEvent;
    private onRoomPaintEvent;
    private onRoomModelEvent;
    private onRoomHeightMapEvent;
    private onRoomHeightMapUpdateEvent;
    private onRoomThicknessEvent;
    private onRoomDoorEvent;
    private onRoomRollingEvent;
    private onObjectsDataUpdateEvent;
    private onFurnitureAliasesEvent;
    private onFurnitureFloorAddEvent;
    private onFurnitureFloorEvent;
    private onFurnitureFloorRemoveEvent;
    private onFurnitureFloorUpdateEvent;
    private onFurnitureWallAddEvent;
    private onFurnitureWallEvent;
    private onFurnitureWallRemoveEvent;
    private onFurnitureWallUpdateEvent;
    private onFurnitureDataEvent;
    private onItemDataUpdateMessageEvent;
    private onOneWayDoorStatusMessageEvent;
    private onDiceValueMessageEvent;
    private onRoomUnitDanceEvent;
    private onRoomUnitEffectEvent;
    private onRoomUnitEvent;
    private onRoomUnitExpressionEvent;
    private onRoomUnitHandItemEvent;
    private onRoomUnitIdleEvent;
    private onRoomUnitInfoEvent;
    private onRoomUnitNumberEvent;
    private onRoomUnitRemoveEvent;
    private onRoomUnitStatusEvent;
    private onRoomUnitChatEvent;
    private onRoomUnitTypingEvent;
    private onPetFigureUpdateEvent;
    private onPetExperienceEvent;
    private onYouArePlayingGameEvent;
    private addRoomObjectFurnitureFloor;
    private addRoomObjectFurnitureWall;
    private onIgnoreResultEvent;
    private onGuideSessionStartedMessageEvent;
    private onGuideSessionEndedMessageEvent;
    private onGuideSessionErrorMessageEvent;
    private updateGuideMarker;
    private removeGuideMarker;
    private setUserGuideStatus;
    get currentRoomId(): number;
}