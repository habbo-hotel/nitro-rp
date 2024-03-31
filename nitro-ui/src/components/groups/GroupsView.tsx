import { GroupPurchasedEvent, GroupSettingsComposer, GroupType, ILinkEventTracker } from '@nitro-rp/renderer';
import { FC, useEffect, useState } from 'react';
import { AddEventLinkTracker, RemoveLinkEventTracker, SendMessageComposer, TryVisitRoom } from '../../api';
import { useGroup, useMessageEvent } from '../../hooks';
import { GroupCreatorView } from './views/GroupCreatorView';
import { GroupInformationStandaloneView } from './views/GroupInformationStandaloneView';
import { GroupManagerView } from './views/GroupManagerView';
import { GroupMembersView } from './views/GroupMembersView';

export function GroupsView() {
    useGroup();
    const [ isCreatorVisible, setCreatorVisible ] = useState<boolean>(false);
    const [groupType, setGroupType] = useState<GroupType>(GroupType.Group);

    useMessageEvent<GroupPurchasedEvent>(GroupPurchasedEvent, event =>
    {
        const parser = event.getParser();
        setCreatorVisible(false);
        TryVisitRoom(parser.roomId);
    });

    useEffect(() =>
    {
        const linkTracker: ILinkEventTracker = {
            linkReceived: (url: string) =>
            {
                const parts = url.split('/');
        
                if(parts.length < 2) return;
        
                switch(parts[1])
                {
                    case 'create':
                        setGroupType(GroupType.Group)
                        setCreatorVisible(true);
                        return;
                    case 'create-gang':
                        setGroupType(GroupType.Gang)
                        setCreatorVisible(true);
                        return;
                    case 'create-corp':
                        setGroupType(GroupType.Corp)
                        setCreatorVisible(true);
                        return;
                    case 'manage':
                        if(!parts[2]) return;
        
                        setCreatorVisible(false);
                        SendMessageComposer(new GroupSettingsComposer(Number(parts[2])));
                        return;
                }
            },
            eventUrlPrefix: 'groups/'
        };

        AddEventLinkTracker(linkTracker);

        return () => RemoveLinkEventTracker(linkTracker);
    }, []);
    
    return (
        <>
            { isCreatorVisible &&
                <GroupCreatorView  groupType={groupType} onClose={ () => setCreatorVisible(false) } /> }
            { !isCreatorVisible &&
                <GroupManagerView /> }
            <GroupMembersView />
            <GroupInformationStandaloneView />
        </>
    );
};
