import { useEffect, useState } from "react";
import { UserRoleplayStatsChangeData, UserRoleplayStatsChangeEvent } from "@nitro-rp/renderer";
import { UserRoleplayStatsQuery } from "../../api/roleplay/user/UserRoleplayStatsQuery";
import { useMessageEvent } from "../events";

export function useRoleplayStats(userID: number): UserRoleplayStatsChangeData {
    const [roleplayStats, setRoleplayStats] = useState<UserRoleplayStatsChangeData>({
        userID: 0,
        username: '',
        figure: '',
        cashBalance: 0,
        bankBalance: 0,
        isDead: false,
        healthNow: 0,
        healthMax: 0,
        energyNow: 0,
        energyMax: 0,
        hungerNow: 0,
        hungerMax: 0,
        corporationID: 0,
        corporationPositionID: 0,
        isWorking: false,
        gangID: undefined,
        gangPositionID: undefined,
    })

    useEffect(() => {
        UserRoleplayStatsQuery(userID)
    }, []);

    useMessageEvent<UserRoleplayStatsChangeEvent>(UserRoleplayStatsChangeEvent, event => {
        const eventData: UserRoleplayStatsChangeData = event.getParser().data;
        if (eventData.userID !== userID) {
            return;
        }
        setRoleplayStats(eventData);
    });

    return roleplayStats;
}