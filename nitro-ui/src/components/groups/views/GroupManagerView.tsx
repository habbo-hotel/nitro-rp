import { GroupBadgePart, GroupInformationEvent, GroupSettingsEvent } from '@nitro-rp/renderer';
import { FC, useState } from 'react';
import { IGroupData, LocalizeText } from '../../../api';
import { Base, Column, Flex, NitroCardContentView, NitroCardHeaderView, NitroCardTabsItemView, NitroCardTabsView, NitroCardView, Text } from '../../../common';
import { useMessageEvent } from '../../../hooks';
import { GroupTabBadgeView } from './tabs/GroupTabBadgeView';
import { GroupTabColorsView } from './tabs/GroupTabColorsView';
import { GroupTabIdentityView } from './tabs/GroupTabIdentityView';
import { GroupTabSettingsView } from './tabs/GroupTabSettingsView';

const TABS: number[] = [ 1, 2, 3, 5 ];

export const GroupManagerView: FC<{}> = props =>
{
    const [ currentTab, setCurrentTab ] = useState<number>(1);
    const [ closeAction, setCloseAction ] = useState<{ action: () => boolean }>(null);
    const [ groupData, setGroupData ] = useState<IGroupData>(null);

    const onClose = () =>
    {
        setCloseAction(prevValue =>
        {
            if(prevValue && prevValue.action) prevValue.action();

            return null;
        });

        setGroupData(null);
    }

    const changeTab = (tab: number) =>
    {
        if(closeAction && closeAction.action) closeAction.action();

        setCurrentTab(tab);
    }

    useMessageEvent<GroupInformationEvent>(GroupInformationEvent, event =>
    {
        const parser = event.getParser();

        if(!groupData || (groupData.groupId !== parser.id)) return;

        setGroupData(prevValue => ({
            ...prevValue,
            groupName: parser.title,
            groupDescription: parser.description,
            groupState: parser.state,
            groupCanMembersDecorate: parser.canMembersDecorate,
        }));
    });

    useMessageEvent<GroupSettingsEvent>(GroupSettingsEvent, event =>
    {
        const parser = event.getParser();

        const groupBadgeParts: GroupBadgePart[] = [];

        parser.badgeParts.forEach((part, id) =>
        {
            groupBadgeParts.push(new GroupBadgePart(
                part.isBase ? GroupBadgePart.BASE : GroupBadgePart.SYMBOL,
                part.key,
                part.color,
                part.position
            ));
        });

        setGroupData({
            groupId: parser.id,
            groupType: parser.type,
            groupName: parser.title,
            groupDescription: parser.description,
            groupHomeroomId: parser.roomId,
            groupState: parser.state,
            groupCanMembersDecorate: parser.canMembersDecorate,
            groupColors: [ parser.colorA, parser.colorB ],
            groupBadgeParts
        });
    });

    if(!groupData || (groupData.groupId <= 0)) return null;
    
    return (
        <NitroCardView className="nitro-group-manager">
            <NitroCardHeaderView headerText={ LocalizeText('group.window.title') } onCloseClick={ onClose } />
            <NitroCardTabsView>
                { TABS.map(tab =>
                {
                    return (<NitroCardTabsItemView key={ tab } isActive={ currentTab === tab } onClick={ () => changeTab(tab) }>
                        { LocalizeText(`group.edit.tab.${ tab }`) }
                    </NitroCardTabsItemView>);
                }) }
            </NitroCardTabsView>
            <NitroCardContentView>
                <Flex alignItems="center" gap={ 2 }>
                    <Base className={ `nitro-group-tab-image tab-${ currentTab }` } />
                    <Column grow gap={ 0 }>
                        <Text bold fontSize={ 4 }>{ LocalizeText(`group.edit.tabcaption.${ currentTab }`) }</Text>
                        <Text>{ LocalizeText(`group.edit.tabdesc.${ currentTab }`) }</Text>
                    </Column>
                </Flex>
                <Column grow overflow="hidden">
                    { (currentTab === 1) &&
                        <GroupTabIdentityView groupData={ groupData } setGroupData={ setGroupData } setCloseAction={ setCloseAction } onClose={ onClose } /> }
                    { (currentTab === 2) &&
                        <GroupTabBadgeView groupData={ groupData } setGroupData={ setGroupData } setCloseAction={ setCloseAction } skipDefault={ true } /> }
                    { (currentTab === 3) &&
                        <GroupTabColorsView groupData={ groupData } setGroupData={ setGroupData } setCloseAction={ setCloseAction } /> }
                    { (currentTab === 5) &&
                        <GroupTabSettingsView groupData={ groupData } setGroupData={ setGroupData } setCloseAction={ setCloseAction } /> }
                </Column>
            </NitroCardContentView>
        </NitroCardView>
    );
};
