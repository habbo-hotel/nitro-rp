import { CorpPositionInfoData, CorpPositionInfoQueryEvent } from "@nitro-rp/renderer";
import { useEffect, useState } from "react";
import { useMessageEvent } from "../events";
import { CorpPositionInfoQuery } from "../../api/roleplay/corp/CorpPositionInfoQuery";

export function useCorpPositionData(corpID: number, corpPositionID: number): CorpPositionInfoData  {
    const [corpPositionData, setCorpPositionData] = useState<CorpPositionInfoData>({
        id: 0,
        userID: 0,
        name: '',
        description: '',
        canHire: false,
        canFire: false,
        canPromote: false,
        canDemote: false,
    });

    useEffect(() => {
        if (corpID === 0 || corpPositionID === 0) {
            return;
        }
        CorpPositionInfoQuery(corpID, corpPositionID);
    }, [corpPositionID]);

    useMessageEvent<CorpPositionInfoQueryEvent>(CorpPositionInfoQueryEvent, event => {
        const eventData: CorpPositionInfoData = event.getParser().data;
        if (eventData.id !== corpPositionID) {
            return;
        }
        setCorpPositionData(eventData);
    });

    return corpPositionData;
}