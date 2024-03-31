import { RoleplayStatsContainerProps } from "./RoleplayStatsContainer.types";
import {LayoutAvatarImageView, Text } from "../../../common";
import { GetUserProfile, LocalizeText } from "../../../api";
import { useSessionInfo } from "../../../hooks";
import { ProgressBar } from "../progress-bar/ProgressBar";
import { useRoleplayStats } from "../../../hooks/roleplay/use-rp-stats";
import { CorpBadge } from "../corp-badge/CorpBadge";
import { GangBadge } from "../gang-badge/GangBadge";


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

    return (
        <div className="nitro-roleplay-stats-container" >
            <div className="nitro-roleplay-stats rounded-bottom p-1">
                <div className="nitro-roleplay-user" onClick={onViewProfile} style={{cursor: 'pointer'}}>
                    <div className="nitro-roleplay-avatar">
                        <LayoutAvatarImageView className="avatar" figure={ roleplayStats.figure } direction={ 2 }/>
                    </div>
                    <Text bold center fontSize={5} variant="white">{roleplayStats.username}</Text>
                </div>
                {
                    userInfo?.userId === userID && (
                        <div className="p-2 rounded">
                            <Text bold  variant="light">{ LocalizeText('roleplay.stats.bank') }</Text>
                            <div className="nitro-stats-item">
                                <Text bold variant="white">${roleplayStats.bankBalance}</Text>
                            </div>
                        </div>
                    )
                }
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.cash') }</Text>
                    <div className="nitro-stats-item">
                        <Text bold variant="white">${roleplayStats.cashBalance}</Text>
                    </div>
                </div>
                <div className="p-2 rounded">
                    <Text bold variant="light">{ LocalizeText('roleplay.stats.health') }</Text>
                    <ProgressBar className="progress-danger" value={roleplayStats.healthNow} minValue={0} maxValue={roleplayStats.healthMax} children={roleplayStats.healthNow <= 0 ? LocalizeText('roleplay.stats.user_is_dead') : undefined} />
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
                <div className="p-1 d-flex rounded" style={{gap: 12}}>
                    <CorpBadge corpID={roleplayStats.corporationID} />
                    {
                        roleplayStats.gangID ? <GangBadge gangID={roleplayStats.gangID} /> : null
                    }
                </div>
            </div>
        </div>
    )
}