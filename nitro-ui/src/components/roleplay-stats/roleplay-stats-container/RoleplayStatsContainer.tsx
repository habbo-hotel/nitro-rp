import { RoleplayStatsContainerProps } from "./RoleplayStatsContainer.types";
import {LayoutAvatarImageView, Text } from "../../../common";
import { LocalizeText } from "../../../api";


export function RoleplayStatsContainer({ username, figure, bankBalance, cashBalance, healthMaximum, healthCurrent, energyMaximum, energyCurrent}: RoleplayStatsContainerProps) {
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
                    <progress value={healthCurrent} max={healthMaximum} />
                </div>
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.energy') }</Text>
                    <progress value={energyCurrent} max={energyMaximum} />
                </div>
            </div>
        </div>
    )
}