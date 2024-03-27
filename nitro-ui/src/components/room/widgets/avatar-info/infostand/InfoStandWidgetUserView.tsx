import { RelationshipStatusInfoEvent, RelationshipStatusInfoMessageParser, RoomSessionFavoriteGroupUpdateEvent, RoomSessionUserBadgesEvent, RoomSessionUserFigureUpdateEvent } from '@nitro-rp/renderer';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AvatarInfoUser, CloneObject, GetConfiguration, GetGroupInformation, GetSessionDataManager, GetUserProfile, LocalizeText } from '../../../../../api';
import { Column, Flex, LayoutAvatarImageView, LayoutBadgeImageView, Text, UserProfileIconView } from '../../../../../common';
import { useMessageEvent, useRoomSessionManagerEvent } from '../../../../../hooks';
import { InfoStandWidgetUserRelationshipsView } from './InfoStandWidgetUserRelationshipsView';
import { InfoStandWidgetUserTagsView } from './InfoStandWidgetUserTagsView';

interface InfoStandWidgetUserViewProps
{
    avatarInfo: AvatarInfoUser;
    setAvatarInfo: Dispatch<SetStateAction<AvatarInfoUser>>;
    onClose: () => void;
}

export const InfoStandWidgetUserView: FC<InfoStandWidgetUserViewProps> = props =>
{
    const { avatarInfo = null, setAvatarInfo = null, onClose = null } = props;
    const [ relationships, setRelationships ] = useState<RelationshipStatusInfoMessageParser>(null);
    useRoomSessionManagerEvent<RoomSessionUserBadgesEvent>(RoomSessionUserBadgesEvent.RSUBE_BADGES, event =>
    {
        if(!avatarInfo || (avatarInfo.webID !== event.userId)) return;

        const oldBadges = avatarInfo.badges.join('');

        if(oldBadges === event.badges.join('')) return;

        setAvatarInfo(prevValue =>
        {
            const newValue = CloneObject(prevValue);

            newValue.badges = event.badges;

            return newValue;
        });
    });

    useRoomSessionManagerEvent<RoomSessionUserFigureUpdateEvent>(RoomSessionUserFigureUpdateEvent.USER_FIGURE, event =>
    {
        if(!avatarInfo || (avatarInfo.roomIndex !== event.roomIndex)) return;

        setAvatarInfo(prevValue =>
        {
            const newValue = CloneObject(prevValue);

            newValue.figure = event.figure;
            newValue.motto = event.customInfo;
            newValue.achievementScore = event.activityPoints;

            return newValue;
        });
    });

    useRoomSessionManagerEvent<RoomSessionFavoriteGroupUpdateEvent>(RoomSessionFavoriteGroupUpdateEvent.FAVOURITE_GROUP_UPDATE, event =>
    {
        if(!avatarInfo || (avatarInfo.roomIndex !== event.roomIndex)) return;

        setAvatarInfo(prevValue =>
        {
            const newValue = CloneObject(prevValue);
            const clearGroup = ((event.status === -1) || (event.habboGroupId <= 0));

            newValue.groupId = clearGroup ? -1 : event.habboGroupId;
            newValue.groupName = clearGroup ? null : event.habboGroupName
            newValue.groupBadgeId = clearGroup ? null : GetSessionDataManager().getGroupBadge(event.habboGroupId);

            return newValue;
        });
    });

    useMessageEvent<RelationshipStatusInfoEvent>(RelationshipStatusInfoEvent, event =>
    {
        const parser = event.getParser();

        if(!avatarInfo || (avatarInfo.webID !== parser.userId)) return;

        setRelationships(parser);
    });

    if(!avatarInfo) return null;

    return (
        <Column className="nitro-infostand rounded">
            <Column overflow="visible" className="container-fluid content-area" gap={ 1 }>
                <Column gap={ 1 }>
                    <Flex alignItems="center" justifyContent="between">
                        <Flex alignItems="center" gap={ 1 }>
                            <UserProfileIconView userId={ avatarInfo.webID } />
                            <Text variant="white" small wrap>{ avatarInfo.name }</Text>
                        </Flex>
                        <FaTimes className="cursor-pointer fa-icon" onClick={ onClose } />
                    </Flex>
                    <hr className="m-0" />
                </Column>
                <Column gap={ 1 }>
                    <Flex gap={ 1 }>
                        <Column fullWidth className="body-image" onClick={ event => GetUserProfile(avatarInfo.webID) }>
                            <LayoutAvatarImageView figure={ avatarInfo.figure } direction={ 4 } />
                        </Column>
                        <Column grow alignItems="center" gap={ 0 }>
                            <Flex gap={ 1 }>
                                <Flex center className="badge-image">
                                    { avatarInfo.badges[0] && <LayoutBadgeImageView badgeCode={ avatarInfo.badges[0] } showInfo={ true } /> }
                                </Flex>
                                <Flex center pointer={ ( avatarInfo.groupId > 0) } className="badge-image" onClick={ event => GetGroupInformation(avatarInfo.groupId) }>
                                    { avatarInfo.groupId > 0 &&
                                        <LayoutBadgeImageView badgeCode={ avatarInfo.groupBadgeId } isGroup={ true } showInfo={ true } customTitle={ avatarInfo.groupName } /> }
                                </Flex>
                            </Flex>
                            <Flex center gap={ 1 }>
                                <Flex center className="badge-image">
                                    { avatarInfo.badges[1] && <LayoutBadgeImageView badgeCode={ avatarInfo.badges[1] } showInfo={ true } /> }
                                </Flex>
                                <Flex center className="badge-image">
                                    { avatarInfo.badges[2] && <LayoutBadgeImageView badgeCode={ avatarInfo.badges[2] } showInfo={ true } /> }
                                </Flex>
                            </Flex>
                            <Flex center gap={ 1 }>
                                <Flex center className="badge-image">
                                    { avatarInfo.badges[3] && <LayoutBadgeImageView badgeCode={ avatarInfo.badges[3] } showInfo={ true } /> }
                                </Flex>
                                <Flex center className="badge-image">
                                    { avatarInfo.badges[4] && <LayoutBadgeImageView badgeCode={ avatarInfo.badges[4] } showInfo={ true } /> }
                                </Flex>
                            </Flex>
                        </Column>
                    </Flex>
                    <hr className="m-0" />
                </Column>
                <Column gap={ 1 }>
                    <Flex alignItems="center" className="bg-light-dark rounded py-1 px-2">
                        <Text bold fullWidth pointer wrap textBreak small variant="white">{LocalizeText('roleplay.stats.health')}</Text>
                        <div className="roleplay-stats-progress-bar progress-danger">
                            <div className="progress" />
                            <div className="progress-text">
                                <Text small variant="white">100/100</Text>
                            </div>
                        </div>
                    </Flex>
                    <hr className="m-0" />
                </Column>
                <Column gap={ 1 }>
                    <Flex alignItems="center" className="bg-light-dark rounded py-1 px-2">
                        <Text bold fullWidth pointer wrap textBreak small variant="white">{LocalizeText('roleplay.stats.energy')}</Text>
                        <div className="roleplay-stats-progress-bar progress-primary">
                            <div className="progress" />
                            <div className="progress-text">
                                <Text small variant="white">100/100</Text>
                            </div>
                        </div>
                    </Flex>
                    <hr className="m-0" />
                </Column>
                <Column gap={ 1 }>
                    <Flex alignItems="center" className="bg-light-dark rounded py-1 px-2">
                        <Text bold fullWidth pointer wrap textBreak small variant="white">{LocalizeText('roleplay.stats.activity')}</Text>
                        <Text small variant="white">{avatarInfo?.motto ?? '-'}</Text>
                    </Flex>
                    <hr className="m-0" />
                </Column>
                <Column gap={ 1 }>
                    { (avatarInfo.carryItem > 0) &&
                        <>
                            <hr className="m-0" />
                            <Text variant="white" small wrap>
                                { LocalizeText('infostand.text.handitem', [ 'item' ], [ LocalizeText('handitem' + avatarInfo.carryItem) ]) }
                            </Text>
                        </> }
                </Column>
                <Column gap={ 1 }>
                    <InfoStandWidgetUserRelationshipsView relationships={ relationships } />
                </Column>
                { GetConfiguration('user.tags.enabled') &&
                    <Column gap={ 1 } className="mt-1">
                        <InfoStandWidgetUserTagsView tags={ GetSessionDataManager().tags } />
                    </Column>
                }
            </Column>
        </Column>
    );
}
