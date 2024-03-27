import { FC } from 'react';
import { Column, Flex, FlexProps, Text } from '../../../common';
import { LocalizeText } from '../../../api';

interface RoleplayStatsContainerViewProps extends FlexProps
{
    healthNow: number;
    healthMaximum: number;
    energyNow: number;
    energyMaximum: number;
}

export const RoleplayStatsContainerView: FC<RoleplayStatsContainerViewProps> = props =>
{
    const { healthNow = 0, healthMaximum = 0, energyNow = 0, energyMaximum = 0, gap = 1, justifyContent = 'between', ...rest } = props;

    return (
        <Flex column fullWidth gap={ 1 }>
            <Column grow gap={ 0 }>
                <Text bold>{ LocalizeText('roleplay.stats.health') }</Text>
                    <progress value={healthNow} max={healthMaximum} />
            </Column>
            <Column grow gap={ 0 }>
                <Text bold>{ LocalizeText('roleplay.stats.energy') }</Text>
                    <progress value={energyNow} max={energyMaximum} />
            </Column>
         </Flex>
    );
}
