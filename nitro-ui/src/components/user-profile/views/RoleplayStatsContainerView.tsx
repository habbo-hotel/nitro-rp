import { Column, Flex, FlexProps, Text } from '../../../common';
import { LocalizeText } from '../../../api';
import { ProgressBar } from '../../roleplay-stats/progress-bar/ProgressBar';
import { useRoleplayStats } from '../../../hooks/roleplay/use-rp-stats';

interface RoleplayStatsContainerViewProps extends FlexProps {
    userID: number;
}

export function RoleplayStatsContainerView({ userID }: RoleplayStatsContainerViewProps) {
    const roleplayStats = useRoleplayStats(userID);
    return (
        <Flex column fullWidth gap={ 1 }>
            <Column grow gap={ 0 }>
                <Text bold>{ LocalizeText('roleplay.stats.health') }</Text>
                    <ProgressBar className="progress-danger" value={roleplayStats.healthNow} minValue={0} maxValue={roleplayStats.healthMax} children={roleplayStats.healthNow <= 0 ? LocalizeText('roleplay.stats.user_is_dead') : undefined} />
            </Column>
            <Column grow gap={ 0 }>
                <Text bold>{ LocalizeText('roleplay.stats.energy') }</Text>                    
                <ProgressBar className="progress-primary" value={roleplayStats.energyNow} minValue={0} maxValue={roleplayStats.energyMax}/>
            </Column>
            <Column grow gap={ 0 }>
                <Text bold>{ LocalizeText('roleplay.stats.hunger') }</Text>                    
                <ProgressBar className="progress-warning" value={roleplayStats.hungerNow} minValue={0} maxValue={roleplayStats.hungerMax}/>
            </Column>
         </Flex>
    );
}
