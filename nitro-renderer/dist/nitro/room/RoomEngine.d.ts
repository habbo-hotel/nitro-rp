import { RenderTexture } from '@pixi/core';
import { DisplayObject } from '@pixi/display';
import { Point, Rectangle } from '@pixi/math';
import { IConnection, IDisposable, IFurnitureStackingHeightMap, IGetImageListener, IImageResult, ILegacyWallGeometry, IMessageComposer, INitroCommunicationManager, IObjectData, IPetColorResult, IPetCustomPart, IRoomContentListener, IRoomContentLoader, IRoomCreator, IRoomEngine, IRoomEngineServices, IRoomGeometry, IRoomInstance, IRoomManager, IRoomManagerListener, IRoomObject, IRoomObjectController, IRoomObjectLogicFactory, IRoomObjectVisualizationFactory, IRoomRendererFactory, IRoomRenderingCanvas, IRoomSessionManager, ISelectedRoomObjectData, ISessionDataManager, ITileObjectMap, IUpdateReceiver, IVector3D } from '../../api';
import { NitroManager } from '../../core';
import { RoomMapData } from './object';
import { RoomObjectEventHandler } from './RoomObjectEventHandler';
export declare class RoomEngine extends NitroManager implements IRoomEngine, IRoomCreator, IRoomEngineServices, IRoomManagerListener, IRoomContentListener, IUpdateReceiver, IDisposable {
    static ROOM_OBJECT_ID: number;
    static ROOM_OBJECT_TYPE: string;
    static CURSOR_OBJECT_ID: number;
    static CURSOR_OBJECT_TYPE: string;
    static ARROW_OBJECT_ID: number;
    static ARROW_OBJECT_TYPE: string;
    static OVERLAY: string;
    static OBJECT_ICON_SPRITE: string;
    private static DRAG_THRESHOLD;
    private static TEMPORARY_ROOM;
    private _communication;
    private _roomRendererFactory;
    private _roomManager;
    private _visualizationFactory;
    private _sessionDataManager;
    private _roomSessionManager;
    private _roomObjectEventHandler;
    private _roomMessageHandler;
    private _roomContentLoader;
    private _ready;
    private _roomContentLoaderReady;
    private _imageObjectIdBank;
    private _imageCallbacks;
    private _thumbnailObjectIdBank;
    private _thumbnailCallbacks;
    private _activeRoomId;
    private _activeRoomActiveCanvas;
    private _activeRoomActiveCanvasMouseX;
    private _activeRoomActiveCanvasMouseY;
    private _activeRoomIsDragged;
    private _activeRoomWasDragged;
    private _activeRoomDragStartX;
    private _activeRoomDragStartY;
    private _activeRoomDragX;
    private _activeRoomDragY;
    private _roomDraggingAlwaysCenters;
    private _roomAllowsDragging;
    private _roomDatas;
    private _roomInstanceDatas;
    private _skipFurnitureCreationForNextFrame;
    private _mouseCursorUpdate;
    private _badgeListenerObjects;
    private _logicFactory;
    constructor(communication: INitroCommunicationManager);
    onInit(): void;
    onDispose(): void;
    private onRoomSessionEvent;
    private onRoomContentLoaderReadyEvent;
    setActiveRoomId(roomId: number): void;
    destroyRoom(roomId: number): void;
    getRoomInstance(roomId: number): IRoomInstance;
    removeRoomInstance(roomId: number): void;
    createRoomInstance(roomId: number, roomMap: RoomMapData): void;
    private setupRoomInstance;
    getRoomInstanceDisplay(roomId: number, id: number, width: number, height: number, scale: number): DisplayObject;
    setRoomInstanceRenderingCanvasMask(roomId: number, canvasId: number, flag: boolean): void;
    setRoomInstanceRenderingCanvasScale(roomId: number, canvasId: number, scale: number, point?: Point, offsetPoint?: Point, override?: boolean, asDelta?: boolean): void;
    getRoomInstanceRenderingCanvas(roomId: number, canvasId?: number): IRoomRenderingCanvas;
    getActiveRoomInstanceRenderingCanvas(): IRoomRenderingCanvas;
    getRoomInstanceRenderingCanvasOffset(roomId: number, canvasId?: number): Point;
    setRoomInstanceRenderingCanvasOffset(roomId: number, canvasId: number, point: Point): boolean;
    getRoomInstanceRenderingCanvasScale(roomId?: number, canvasId?: number): number;
    initializeRoomInstanceRenderingCanvas(roomId: number, canvasId: number, width: number, height: number): void;
    getRoomInstanceGeometry(roomId: number, canvasId?: number): IRoomGeometry;
    getRoomInstanceVariable<T>(roomId: number, key: string): T;
    updateRoomInstancePlaneVisibility(roomId: number, wallVisible: boolean, floorVisible?: boolean): boolean;
    updateRoomInstancePlaneThickness(roomId: number, wallThickness: number, floorThickness: number): boolean;
    updateRoomInstancePlaneType(roomId: number, floorType?: string, wallType?: string, landscapeType?: string, _arg_5?: boolean): boolean;
    updateObjectRoomColor(roomId: number, color: number, light: number, backgroundOnly: boolean): boolean;
    addRoomInstanceFloorHole(roomId: number, objectId: number): void;
    removeRoomInstanceFloorHole(roomId: number, objectId: number): void;
    setRoomEngineGameMode(roomId: number, isPlaying: boolean): void;
    isRoomIdPlayingGame(roomId: number): boolean;
    isPlayingGame(): boolean;
    disableUpdate(flag: boolean): void;
    runUpdate(): void;
    runVisibilityUpdate(): void;
    update(time: number, update?: boolean): void;
    private setPointer;
    private processPendingFurniture;
    onRoomEngineInitalized(flag: boolean): void;
    private processPendingFurnitureFloor;
    private processPendingFurnitureWall;
    setRoomSessionOwnUser(roomId: number, objectId: number): void;
    private get cameraFollowDuration();
    private updateRoomCameras;
    private updateRoomCamera;
    private getRoomCanvasRectangle;
    getRoomObjectBoundingRectangle(roomId: number, objectId: number, category: number, canvasId: number): Rectangle;
    getCanvasBoundingRectangle(canvasId: number): Rectangle;
    getFurnitureFloorName(typeId: number): string;
    getFurnitureWallName(typeId: number, extra?: string): string;
    getFurnitureFloorColorIndex(typeId: number): number;
    getFurnitureWallColorIndex(typeId: number): number;
    private getRoomInstanceData;
    getRoomInstanceModelName(roomId: number): string;
    setRoomInstanceModelName(roomId: number, name: string): void;
    getRoomTileObjectMap(k: number): ITileObjectMap;
    private getCurrentRoomCamera;
    private getRoomCamera;
    getSelectedRoomObjectData(roomId: number): ISelectedRoomObjectData;
    setSelectedRoomObjectData(roomId: number, data: ISelectedRoomObjectData): void;
    getPlacedRoomObjectData(roomId: number): ISelectedRoomObjectData;
    setPlacedRoomObjectData(roomId: number, data: ISelectedRoomObjectData): void;
    cancelRoomObjectPlacement(): void;
    getFurnitureStackingHeightMap(roomId: number): IFurnitureStackingHeightMap;
    setFurnitureStackingHeightMap(roomId: number, heightMap: IFurnitureStackingHeightMap): void;
    getLegacyWallGeometry(roomId: number): ILegacyWallGeometry;
    private createRoomObjectAndInitialize;
    getTotalObjectsForManager(roomId: number, category: number): number;
    getRoomObject(roomId: number, objectId: number, category: number): IRoomObjectController;
    getObject(roomId: string, objectId: number, category: number): IRoomObjectController;
    getRoomObjectByIndex(roomId: number, index: number, category: number): IRoomObjectController;
    getRoomObjectCategoryForType(type: string): number;
    getRoomObjectCursor(roomId: number): IRoomObjectController;
    getRoomObjectSelectionArrow(roomId: number): IRoomObjectController;
    getRoomOwnObject(roomId: number): IRoomObjectController;
    getRoomObjectUser(roomId: number, objectId: number): IRoomObjectController;
    removeRoomObjectUser(roomId: number, objectId: number): void;
    createRoomObjectUser(roomId: number, objectId: number, type: string): IRoomObjectController;
    getRoomObjectFloor(roomId: number, objectId: number): IRoomObjectController;
    createRoomObjectFloor(roomId: number, id: number, type: string): IRoomObjectController;
    removeRoomObjectFloor(roomId: number, objectId: number, userId?: number, _arg_4?: boolean): void;
    getRoomObjectWall(roomId: number, objectId: number): IRoomObjectController;
    removeRoomObjectWall(roomId: number, objectId: number, userId?: number): void;
    createRoomObjectWall(roomId: number, id: number, type: string): IRoomObjectController;
    private removeRoomObject;
    addFurnitureFloor(roomId: number, id: number, typeId: number, location: IVector3D, direction: IVector3D, state: number, objectData: IObjectData, extra?: number, expires?: number, usagePolicy?: number, ownerId?: number, ownerName?: string, synchronized?: boolean, realRoomObject?: boolean, sizeZ?: number): boolean;
    addFurnitureFloorByTypeName(roomId: number, id: number, typeName: string, location: IVector3D, direction: IVector3D, state: number, objectData: IObjectData, extra?: number, expires?: number, usagePolicy?: number, ownerId?: number, ownerName?: string, synchronized?: boolean, realRoomObject?: boolean, sizeZ?: number): boolean;
    addFurnitureWall(roomId: number, id: number, typeId: number, location: IVector3D, direction: IVector3D, state: number, extra: string, expires?: number, usagePolicy?: number, ownerId?: number, ownerName?: string, realRoomObject?: boolean): boolean;
    updateRoomObjectFloor(roomId: number, objectId: number, location: IVector3D, direction: IVector3D, state: number, data: IObjectData, extra?: number): boolean;
    updateRoomObjectWall(roomId: number, objectId: number, location: IVector3D, direction: IVector3D, state: number, extra?: string): boolean;
    updateRoomObjectWallItemData(roomId: number, objectId: number, data: string): boolean;
    updateRoomObjectFloorHeight(roomId: number, objectId: number, height: number): boolean;
    updateRoomObjectFloorExpiration(roomId: number, objectId: number, expires: number): boolean;
    updateRoomObjectWallExpiration(roomId: number, objectId: number, expires: number): boolean;
    updateRoomObjectMask(roomId: number, objectId: number, _arg_3?: boolean): void;
    rollRoomObjectFloor(roomId: number, objectId: number, location: IVector3D, targetLocation: IVector3D): void;
    updateRoomObjectWallLocation(roomId: number, objectId: number, location: IVector3D): boolean;
    addRoomObjectUser(roomId: number, objectId: number, location: IVector3D, direction: IVector3D, headDirection: number, type: number, figure: string): boolean;
    updateRoomObjectUserLocation(roomId: number, objectId: number, location: IVector3D, targetLocation: IVector3D, canStandUp?: boolean, baseY?: number, direction?: IVector3D, headDirection?: number): boolean;
    private fixedUserLocation;
    updateRoomObjectUserAction(roomId: number, objectId: number, action: string, value: number, parameter?: string): boolean;
    updateRoomObjectUserFigure(roomId: number, objectId: number, figure: string, gender?: string, subType?: string, isRiding?: boolean): boolean;
    updateRoomObjectUserFlatControl(roomId: number, objectId: number, level: string): boolean;
    updateRoomObjectUserEffect(roomId: number, objectId: number, effectId: number, delay?: number): boolean;
    updateRoomObjectUserGesture(roomId: number, objectId: number, gestureId: number): boolean;
    updateRoomObjectUserPetGesture(roomId: number, objectId: number, gesture: string): boolean;
    updateRoomObjectUserPosture(roomId: number, objectId: number, type: string, parameter?: string): boolean;
    updateRoomObjectUserOwn(roomId: number, objectId: number): void;
    useRoomObject(objectId: number, category: number): boolean;
    objectInitialized(roomId: string, objectId: number, category: number): void;
    changeObjectModelData(roomId: number, objectId: number, category: number, numberKey: string, numberValue: number): boolean;
    changeObjectState(roomId: number, objectId: number, category: number): void;
    loadRoomObjectBadgeImage(roomId: number, objectId: number, objectCategory: number, badgeId: string, groupBadge?: boolean): void;
    private onBadgeImageReadyEvent;
    private putBadgeInObjectAssets;
    dispatchMouseEvent(canvasId: number, x: number, y: number, type: string, altKey: boolean, ctrlKey: boolean, shiftKey: boolean, buttonDown: boolean): void;
    private handleRoomDragging;
    updateMousePointer(type: string, objectId: number, objectType: string): void;
    private setMouseButton;
    private setMouseDefault;
    processRoomObjectOperation(objectId: number, category: number, operation: string): boolean;
    modifyRoomObjectDataWithMap(objectId: number, category: number, operation: string, data: Map<string, string>): boolean;
    modifyRoomObjectData(objectId: number, category: number, colorHex: string, data: string): boolean;
    private processRoomObjectEvent;
    processRoomObjectPlacement(placementSource: string, id: number, category: number, typeId: number, extra?: string, stuffData?: IObjectData, state?: number, frameNumber?: number, posture?: string): boolean;
    getRoomObjectScreenLocation(roomId: number, objectId: number, objectType: number, canvasId?: number): Point;
    selectRoomObject(roomId: number, objectId: number, objectCategory: number): void;
    setSelectedAvatar(roomId: number, objectId: number): void;
    cancelRoomObjectInsert(): void;
    private addOverlayIconSprite;
    onRoomContentLoaded(id: number, assetName: string, success: boolean): void;
    setObjectMoverIconSprite(objectId: number, category: number, _arg_3: boolean, instanceData?: string, stuffData?: IObjectData, state?: number, frameNumber?: number, posture?: string): void;
    getRoomObjectImage(roomId: number, objectId: number, category: number, direction: IVector3D, scale: number, listener: IGetImageListener, bgColor?: number): IImageResult;
    getFurnitureFloorIconUrl(typeId: number): string;
    getFurnitureFloorIcon(typeId: number, listener: IGetImageListener, extras?: string, objectData?: IObjectData): IImageResult;
    getFurnitureWallIconUrl(typeId: number, extra?: string): string;
    getFurnitureWallIcon(typeId: number, listener: IGetImageListener, extras?: string): IImageResult;
    getFurnitureFloorImage(typeId: number, direction: IVector3D, scale: number, listener: IGetImageListener, bgColor?: number, extras?: string, state?: number, frameCount?: number, objectData?: IObjectData): IImageResult;
    getFurnitureWallImage(typeId: number, direction: IVector3D, scale: number, listener: IGetImageListener, bgColor?: number, extras?: string, state?: number, frameCount?: number): IImageResult;
    getRoomObjectPetImage(typeId: number, paletteId: number, color: number, direction: IVector3D, scale: number, listener: IGetImageListener, headOnly?: boolean, bgColor?: number, customParts?: IPetCustomPart[], posture?: string): IImageResult;
    getGenericRoomObjectImage(type: string, value: string, direction: IVector3D, scale: number, listener: IGetImageListener, bgColor?: number, extras?: string, objectData?: IObjectData, state?: number, frameCount?: number, posture?: string, originalId?: number): IImageResult;
    getGenericRoomObjectThumbnail(type: string, param: string, listener: IGetImageListener, extraData?: string, stuffData?: IObjectData): IImageResult;
    initalizeTemporaryObjectsByType(type: string, _arg_2: boolean): void;
    setObjectMoverIconSpriteVisible(k: boolean): void;
    removeObjectMoverIconSprite(): void;
    private getRenderingCanvasOverlay;
    private removeOverlayIconSprite;
    private getOverlayIconSprite;
    getRoomObjects(roomId: number, category: number): IRoomObject[];
    protected addObjectToTileMap(k: number, _arg_2: IRoomObject): void;
    refreshTileObjectMap(k: number, _arg_2: string): void;
    getRenderRoomMessage(k: Rectangle, _arg_2: number, _arg_3?: boolean, _arg_4?: boolean, _arg_5?: boolean, canvasId?: number): IMessageComposer<unknown[]>;
    createTextureFromRoom(roomId: number, canvasId?: number, bounds?: Rectangle): RenderTexture;
    saveTextureAsScreenshot(texture: RenderTexture, saveAsThumbnail?: boolean): void;
    saveBase64AsScreenshot(base64: string, saveAsThumbnail?: boolean): void;
    objectsInitialized(k: string): void;
    getRoomId(id: number): string;
    private getRoomIdFromString;
    private getRoomObjectRoomId;
    private getRoomObjectAdUrl;
    getPetTypeId(figure: string): number;
    private getPetType;
    isRoomContentTypeLoaded(name: string): boolean;
    getPetColorResult(petIndex: number, paletteIndex: number): IPetColorResult;
    getPetColorResultsForTag(petIndex: number, tagName: string): IPetColorResult[];
    deleteRoomObject(objectId: number, objectCategory: number): boolean;
    get connection(): IConnection;
    get sessionDataManager(): ISessionDataManager;
    set sessionDataManager(manager: ISessionDataManager);
    get roomSessionManager(): IRoomSessionManager;
    set roomSessionManager(manager: IRoomSessionManager);
    get roomManager(): IRoomManager;
    set roomManager(manager: IRoomManager);
    get objectEventHandler(): RoomObjectEventHandler;
    get roomRendererFactory(): IRoomRendererFactory;
    get visualizationFactory(): IRoomObjectVisualizationFactory;
    get logicFactory(): IRoomObjectLogicFactory;
    get activeRoomId(): number;
    get ready(): boolean;
    get roomContentLoader(): IRoomContentLoader;
    get isDecorating(): boolean;
    private get useOffsetScrolling();
    get selectedAvatarId(): number;
    getRoomObjectCount(roomId: number, categoryId: number): number;
}
