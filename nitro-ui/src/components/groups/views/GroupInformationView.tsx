import { GroupInformationParser } from '@nitro-rp/renderer';
import { FC } from 'react';
import { CatalogPageName, CreateLinkEvent, GetGroupManager, GetGroupMembers, LocalizeText, TryVisitRoom } from '../../../api';
import {Column, Flex, Grid, GridProps, LayoutBadgeImageView, Text } from '../../../common';

interface GroupInformationViewProps extends GridProps
{
    groupInformation: GroupInformationParser;
    onJoin?: () => void;
    onClose?: () => void;
}

export const GroupInformationView: FC<GroupInformationViewProps> = props =>
{
    const { groupInformation = null, onClose = null, overflow = 'hidden', ...rest } = props;

    const handleAction = (action: string) =>
    {
        switch(action)
        {
            case 'members':
                GetGroupMembers(groupInformation.id);
                break;
            case 'members_pending':
                GetGroupMembers(groupInformation.id, 2);
                break;
            case 'manage':
                GetGroupManager(groupInformation.id);
                break;
            case 'homeroom':
                TryVisitRoom(groupInformation.roomId);
                break;
            case 'furniture':
                CreateLinkEvent('catalog/open/' + CatalogPageName.GUILD_CUSTOM_FURNI);
                break;
            case 'popular_groups':
                CreateLinkEvent('navigator/search/groups');
                break;
        }
    }

    if(!groupInformation) return null;

    return (
        <Grid overflow={ overflow } { ...rest }>
            <Column center size={ 3 } overflow="hidden">
                <Flex alignItems="center" overflow="hidden" className="group-badge">
                    <LayoutBadgeImageView badgeCode={ groupInformation.badge } isGroup={ true } scale={ 2 } />
                </Flex>
                <Column alignItems="center" gap={ 1 }>
                    <Text small underline pointer onClick={ () => handleAction('members') }>{ LocalizeText('group.membercount', [ 'totalMembers' ], [ groupInformation.membersCount.toString() ]) }</Text>
                    { (groupInformation.pendingRequestsCount > 0) &&
                        <Text small underline pointer onClick={ () => handleAction('members_pending') }>{ LocalizeText('group.pendingmembercount', [ 'amount' ], [ groupInformation.pendingRequestsCount.toString() ]) }</Text> }
                    { groupInformation.isOwner &&
                        <Text small underline pointer onClick={ () => handleAction('manage') }>{ LocalizeText('group.manage') }</Text> }
                </Column>
            </Column>
            <Column size={ 9 } justifyContent="between" overflow="auto">
                <Column overflow="hidden">
                    <Column gap={ 1 }>
                        <Flex alignItems="center" gap={ 2 }>
                            <Text bold>{ groupInformation.title }</Text>
                        </Flex>
                        <Text small>{ LocalizeText('group.created', [ 'date', 'owner' ], [ groupInformation.createdAt, groupInformation.ownerName ]) }</Text>
                    </Column>
                    <Text small overflow="auto" className="group-description">{ groupInformation.description }</Text>
                </Column>
            </Column>
        </Grid>
    );
};
