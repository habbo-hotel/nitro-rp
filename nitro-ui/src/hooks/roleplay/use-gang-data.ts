import { GangInfoData, GangInfoQueryEvent } from "@nitro-rp/renderer";
import { useEffect, useState } from "react";
import { useMessageEvent } from "../events";
import { GangInfoQuery } from "../../api/roleplay/gang/GangInfoQuery";

export function useGangData(gangID: number): GangInfoData  {
    const [gangData, setGangData] = useState<GangInfoData>({
        id: 0,
        userID: 0,
        roomID: 0,
        name: '',
        description: '',
        badgeCode: '',
    });

    useEffect(() => {
        GangInfoQuery(gangID);
    }, [gangID]);

    useMessageEvent<GangInfoQueryEvent>(GangInfoQueryEvent, event => {
        const eventData: GangInfoData = event.getParser().data;
        if (eventData.id !== gangID) {
            return;
        }
        setGangData(eventData);
    });

    return gangData;
}