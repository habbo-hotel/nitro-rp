import { GetGroupInformation } from "../../../api";
import { LayoutBadgeImageView } from "../../../common";
import { useGangData } from "../../../hooks/roleplay/use-gang-data";
import { GangBadgeProps } from "./GangBadge.types";

export function GangBadge({ gangID }: GangBadgeProps) {
    const gangData = useGangData(gangID);
    return (
        <div style={{cursor: 'pointer' }} onClick={ event => GetGroupInformation(gangData.id) }>
            <LayoutBadgeImageView badgeCode={ gangData.badgeCode } showInfo={ true } isGroup customTitle={gangData.name} /> 
        </div>
    )
}