import { LayoutBadgeImageView } from "../../../common";
import { useGangData } from "../../../hooks/roleplay/use-gang-data";
import { GangBadgeProps } from "./GangBadge.types";

export function GangBadge({ gangID }: GangBadgeProps) {
    const gangData = useGangData(gangID);
    return <LayoutBadgeImageView badgeCode={ gangData.badgeCode } showInfo={ true } isGroup/> 
}