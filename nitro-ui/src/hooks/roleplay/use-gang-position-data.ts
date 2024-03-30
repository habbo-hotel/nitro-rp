import { GangPositionInfoData, GangPositionInfoQueryEvent } from "@nitro-rp/renderer";
import { useEffect, useState } from "react";
import { useMessageEvent } from "../events";
import { GangPositionInfoQuery } from "../../api/roleplay/gang/GangPositionInfoQuery";

export function useGangPositionData(gangID: number, gangPositionID: number): GangPositionInfoData  {
    const [gangPositionData, setGangPositionData] = useState<GangPositionInfoData>({
        id: 0,
        userID: 0,
        name: '',
        description: '',
        
    });

    useEffect(() => {
        GangPositionInfoQuery(gangID, gangPositionID);
    }, [gangPositionID]);

    useMessageEvent<GangPositionInfoQueryEvent>(GangPositionInfoQueryEvent, event => {
        const eventData: GangPositionInfoData = event.getParser().data;
        if (eventData.id !== gangPositionID) {
            return;
        }
        setGangPositionData(eventData);
    });

    return gangPositionData;
}