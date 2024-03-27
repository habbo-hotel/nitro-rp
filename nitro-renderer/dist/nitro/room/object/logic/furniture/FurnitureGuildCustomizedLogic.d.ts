import { IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureGuildCustomizedLogic extends FurnitureMultiStateLogic {
    static GROUPID_KEY: number;
    static BADGE_KEY: number;
    static COLOR1_KEY: number;
    static COLOR2_KEY: number;
    getEventTypes(): string[];
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    protected updateGroupId(id: string): void;
    private updateBadge;
    updateColors(color1: string, color2: string): void;
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
    private openContextMenu;
}
