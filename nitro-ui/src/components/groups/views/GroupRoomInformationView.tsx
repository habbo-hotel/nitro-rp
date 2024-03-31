import { DesktopViewEvent, GetGuestRoomResultEvent, GroupInformationComposer, GroupInformationEvent, GroupInformationParser, HabboGroupDeactivatedMessageEvent, RoomEntryInfoMessageEvent } from '@nitro-rp/renderer';
import { FC, useState } from 'react';import { GetGroupInformation, SendMessageComposer } from '../../../api';
import { Base, Column, Flex, LayoutBadgeImageView, Text } from '../../../common';
import { useMessageEvent } from '../../../hooks';

export const GroupRoomInformationView: FC<{}> = props =>
{
    const [ expectedGroupId, setExpectedGroupId ] = useState<number>(0);
    const [ groupInformation, setGroupInformation ] = useState<GroupInformationParser>(null);

    useMessageEvent<DesktopViewEvent>(DesktopViewEvent, event =>
    {
        setExpectedGroupId(0);
        setGroupInformation(null);
    });

    useMessageEvent<RoomEntryInfoMessageEvent>(RoomEntryInfoMessageEvent, event =>
    {
        setExpectedGroupId(0);
        setGroupInformation(null);
    });

    useMessageEvent<GetGuestRoomResultEvent>(GetGuestRoomResultEvent, event =>
    {
        const parser = event.getParser();

        if(!parser.roomEnter) return;

        if(parser.data.habboGroupId > 0)
        {
            setExpectedGroupId(parser.data.habboGroupId);
            SendMessageComposer(new GroupInformationComposer(parser.data.habboGroupId, false));
        }
        else
        {
            setExpectedGroupId(0);
            setGroupInformation(null);
        }
    });

    useMessageEvent<HabboGroupDeactivatedMessageEvent>(HabboGroupDeactivatedMessageEvent, event =>
    {
        const parser = event.getParser();

        if(!groupInformation || ((parser.groupId !== groupInformation.id) && (parser.groupId !== expectedGroupId))) return;

        setExpectedGroupId(0);
        setGroupInformation(null);
    });

    useMessageEvent<GroupInformationEvent>(GroupInformationEvent, event =>
    {
        const parser = event.getParser();

        if(parser.id !== expectedGroupId) return;

        setGroupInformation(parser);
    });


    if(!groupInformation) return null;

    return (
        <Base className="nitro-notification-bubble rounded">
            <Column>
                <Flex pointer alignItems="center" gap={ 2 } onClick={ event => GetGroupInformation(groupInformation.id) }>
                    <Base className="group-badge">
                        <LayoutBadgeImageView badgeCode={ groupInformation.badge } isGroup={ true } />
                    </Base>
                    <Text variant="white">{ groupInformation.title }</Text>
                </Flex>
            </Column>
        </Base>
    );
};
