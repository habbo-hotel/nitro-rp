import { RoleplayStatsContainerProps } from "./RoleplayStatsContainer.types";
import {LayoutAvatarImageView, Text } from "../../../common";
import { LocalizeText } from "../../../api";
import { useState } from "react";
import { useMessageEvent } from "../../../hooks";
import { UserRoleplayStatsChangeEvent } from "@nitro-rp/renderer/src/nitro/communication/messages/incoming/roleplay";
import { UserRoleplayStatsChangeData } from "@nitro-rp/renderer/src/nitro/communication/messages/parser/roleplay/UserRoleplayStatsChangeParser";


export function RoleplayStatsContainer({ username, figure, bankBalance, cashBalance}: RoleplayStatsContainerProps) {
    const [roleplayStats, setRoleplayStats] = useState<UserRoleplayStatsChangeData>({
        userID: 0,
        healthCurrent: 0,
        healthMaximum: 0,
        corporationID: 0,
        corporationPositionID: 0,
        gangID: undefined,
        gangPositionID: undefined,
    })

    useMessageEvent<UserRoleplayStatsChangeEvent>(UserRoleplayStatsChangeEvent, event => {
        setRoleplayStats(event.getParser().data);
    });

    const healthPercent = (roleplayStats.healthCurrent / roleplayStats.healthMaximum) * 100;
    const energyPercent = 100;

    return (
        <div className="nitro-roleplay-stats-container" >
            <div className="nitro-roleplay-stats rounded-bottom p-1">
                <div className="nitro-roleplay-user">
                    <div className="nitro-roleplay-avatar">
                        <LayoutAvatarImageView className="avatar" figure={ figure } direction={ 2 } />
                    </div>
                    <Text bold center fontSize={5} variant="white">{username}</Text>
                </div>
                <div className="p-2 rounded">
                    <Text bold  variant="light">{ LocalizeText('roleplay.stats.bank') }</Text>
                    <div className="nitro-stats-item">
                        <Text bold variant="white">${bankBalance}</Text>
                    </div>
                </div>
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.cash') }</Text>
                    <div className="nitro-stats-item">
                        <Text bold variant="white">${cashBalance}</Text>
                    </div>
                </div>
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.health') }</Text>
                    <progress value={healthPercent} max={roleplayStats.healthMaximum} />
                </div>
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.energy') }</Text>
                    <progress value={energyPercent} max={100} />
                </div>
            </div>
        </div>
    )
}