import { RoleplayStatsContainerProps } from "./RoleplayStatsContainer.types";
import {LayoutAvatarImageView, Text } from "../../../common";
import { GetUserProfile, LocalizeText } from "../../../api";
import { useEffect, useState } from "react";
import { useMessageEvent, useSessionInfo } from "../../../hooks";
import { UserRoleplayStatsQuery } from "../../../api/roleplay/user/UserRoleplayStatsQuery";
import { UserRoleplayStatsChangeData, UserRoleplayStatsChangeEvent } from "@nitro-rp/renderer";
import { ProgressBar } from "../progress-bar/ProgressBar";

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

function RoleplayProgressBar(now: number, max: number) {
    return (
        <div className="roleplay-stats-progress-bar progress-danger">
        <div className="progress"  />
            <div className="progress-text">
                <Text small variant="white">{now}/{max}</Text>
            </div>
        </div>
    )
}

export function RoleplayStatsContainer({ userID }: RoleplayStatsContainerProps) {
    const {userInfo = null} = useSessionInfo();
    const roleplayStats = useRoleplayStats(userID);

    function onViewProfile() {
        return GetUserProfile(roleplayStats.userID)
    }

    const healthPercent = (roleplayStats.healthNow / roleplayStats.healthMax) * 100;
    const energyPercent =  (roleplayStats.energyNow / roleplayStats.energyNow) * 100;
    const hungerPercent =  (roleplayStats.hungerNow / roleplayStats.hungerMax) * 100;

    return (
        <div className="nitro-roleplay-stats-container" >
            <div className="nitro-roleplay-stats rounded-bottom p-1">
                <div className="nitro-roleplay-user" onClick={onViewProfile} style={{cursor: 'pointer'}}>
                    <div className="nitro-roleplay-avatar">
                        <LayoutAvatarImageView className="avatar" figure={ roleplayStats.figure } direction={ 2 }/>
                    </div>
                    <Text bold center fontSize={5} variant="white">{roleplayStats.username}</Text>
                </div>
                <div className="p-2 rounded">
                    <Text bold  variant="light">{ LocalizeText('roleplay.stats.bank') }</Text>
                    <div className="nitro-stats-item">
                        <Text bold variant="white">${roleplayStats.bankBalance}</Text>
                    </div>
                </div>
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.cash') }</Text>
                    <div className="nitro-stats-item">
                        <Text bold variant="white">${roleplayStats.cashBalance}</Text>
                    </div>
                </div>
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.health') }</Text>
                    <ProgressBar className="progress-danger" value={roleplayStats.healthNow} minValue={0} maxValue={roleplayStats.healthMax} />
                </div>
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.energy') }</Text>
                    <ProgressBar className="progress-primary" value={roleplayStats.energyNow} minValue={0} maxValue={roleplayStats.energyMax} />
                </div>
                {
                    userInfo?.userId === userID && (
                        <div className="p-2 rounded">
                        <Text bold variant="light">{ LocalizeText('roleplay.stats.hunger') }</Text>
                        <ProgressBar className="progress-warning" value={roleplayStats.hungerNow} minValue={0} maxValue={roleplayStats.hungerMax} />
                    </div>
                    )
                }
            </div>
        </div>
    )
}