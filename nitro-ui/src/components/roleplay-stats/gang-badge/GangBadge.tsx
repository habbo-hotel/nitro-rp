import { LayoutBadgeImageView } from "../../../common";
import { useGangData } from "../../../hooks/roleplay/use-gang-data";
import { useGangPositionData } from "../../../hooks/roleplay/use-gang-position-data";
import { GangBadgeProps } from "./GangBadge.types";

export function GangBadge({ gangID, gangPositionID }: GangBadgeProps) {
    const gangData = useGangData(gangID);
    const gangPositionData = useGangPositionData(gangID, gangPositionID);
    return <LayoutBadgeImageView badgeCode={ gangData.badgeCode } showInfo={ true } customTitle={gangPositionData.name} /> 
}