import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureBadgeDisplayLogic } from './FurnitureBadgeDisplayLogic';
export declare class FurnitureAchievementResolutionLogic extends FurnitureBadgeDisplayLogic {
    static STATE_RESOLUTION_NOT_STARTED: number;
    static STATE_RESOLUTION_IN_PROGRESS: number;
    static STATE_RESOLUTION_ACHIEVED: number;
    static STATE_RESOLUTION_FAILED: number;
    private static ACH_NOT_SET;
    private static BADGE_VISIBLE_IN_STATE;
    getEventTypes(): string[];
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    useObject(): void;
    protected updateBadge(badgeId: string): void;
}
