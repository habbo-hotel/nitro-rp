import { CorpInfoData, CorpInfoQueryEvent } from "@nitro-rp/renderer";
import { useEffect, useState } from "react";
import { useMessageEvent } from "../events";
import { CorpInfoQuery } from "../../api/roleplay/corp/CorpInfoQuery";

export function useCorpData(corpID: number): CorpInfoData  {
    const [corpData, setCorpData] = useState<CorpInfoData>({
        id: 0,
        userID: 0,
        roomID: 0,
        name: '',
        description: '',
        badgeCode: '',
    });

    useEffect(() => {
        if (corpID === 0) {
            return;
        }
        CorpInfoQuery(corpID);
    }, [corpID]);

    useMessageEvent<CorpInfoQueryEvent>(CorpInfoQueryEvent, event => {
        const eventData: CorpInfoData = event.getParser().data;
        if (eventData.id !== corpID) {
            return;
        }
        setCorpData(eventData);
    });

    return corpData;
}