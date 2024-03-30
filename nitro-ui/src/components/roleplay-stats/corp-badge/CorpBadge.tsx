import { CorpBadgeProps } from "./CorpBadge.types";
import { useCorpData } from "../../../hooks/roleplay/use-corp-data";
import { LayoutBadgeImageView } from "../../../common";
import { useCorpPositionData } from "../../../hooks/roleplay/use-corp-position-data";

export function CorpBadge({ corpID, corpPositionID }: CorpBadgeProps) {
    const corpData = useCorpData(corpID);
    const corpPositionData = useCorpPositionData(corpID, corpPositionID);

    console.log(corpData);

    return <LayoutBadgeImageView badgeCode={ corpData.badgeCode } showInfo={ true } customTitle={corpPositionData.name} /> 
}