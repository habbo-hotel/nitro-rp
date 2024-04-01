import { CorpBadgeProps } from "./CorpBadge.types";
import { useCorpData } from "../../../hooks/roleplay/use-corp-data";
import { LayoutBadgeImageView } from "../../../common";
import { GetGroupInformation } from "../../../api";

export function CorpBadge({ corpID }: CorpBadgeProps) {
    const corpData = useCorpData(corpID);

    return (
        <div style={{cursor: 'pointer' }} onClick={ event => GetGroupInformation(corpData.id) }>
            <LayoutBadgeImageView badgeCode={ corpData.badgeCode } showInfo={ true } isGroup customTitle={corpData.name} /> 
        </div>
    )
}