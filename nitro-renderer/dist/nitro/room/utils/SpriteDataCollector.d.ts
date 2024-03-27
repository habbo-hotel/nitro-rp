import { Rectangle } from '@pixi/math';
import { IPlaneDrawingData, IRoomRenderingCanvas } from '../../../api';
import { RoomEngine } from '../RoomEngine';
export declare class SpriteDataCollector {
    private static MANNEQUIN_MAGIC_X_OFFSET;
    private static MANNEQUIN_MAGIC_Y_OFFSET;
    private static AVATAR_WATER_EFFECT_MAGIC_Y_OFFSET;
    private static MAX_EXTERNAL_IMAGE_COUNT;
    private maxZ;
    private spriteCount;
    private externalImageCount;
    private static addMannequinSprites;
    private static sortSpriteDataObjects;
    private static isSpriteInViewPort;
    private static sortQuadPoints;
    getFurniData(k: Rectangle, _arg_2: IRoomRenderingCanvas, _arg_3: RoomEngine, _arg_4: number): string;
    getRoomRenderingModifiers(k: RoomEngine): string;
    private getSpriteDataObject;
    private makeBackgroundPlane;
    private sortRoomPlanes;
    getRoomPlanes(k: Rectangle, _arg_2: IRoomRenderingCanvas, _arg_3: RoomEngine, _arg_4: number): IPlaneDrawingData[];
}
