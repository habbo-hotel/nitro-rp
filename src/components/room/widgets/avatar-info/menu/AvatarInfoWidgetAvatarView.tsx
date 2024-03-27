import { RoomObjectCategory, RoomObjectVariable, RoomUnitGiveHandItemComposer, TradingOpenComposer } from '@nitrots/nitro-renderer';
import { FC, useEffect, useMemo, useState } from 'react';
import { AvatarInfoUser, CreateLinkEvent, DispatchUiEvent, GetOwnRoomObject, GetUserProfile, LocalizeText, RoomWidgetUpdateChatInputContentEvent, SendMessageComposer } from '../../../../../api';
import { useFriends } from '../../../../../hooks';
import { ContextMenuHeaderView } from '../../context-menu/ContextMenuHeaderView';
import { ContextMenuListItemView } from '../../context-menu/ContextMenuListItemView';
import { ContextMenuView } from '../../context-menu/ContextMenuView';
import { AttackUser } from '../../../../../api/roleplay/AttackUser';

interface AvatarInfoWidgetAvatarViewProps
{
    avatarInfo: AvatarInfoUser;
    onClose: () => void;
}

const MODE_NORMAL = 0;

export const AvatarInfoWidgetAvatarView: FC<AvatarInfoWidgetAvatarViewProps> = props =>
{
    const { avatarInfo = null, onClose = null } = props;
    const [ mode, setMode ] = useState(MODE_NORMAL);
    const { canRequestFriend = null } = useFriends();

    const canGiveHandItem = useMemo(() =>
    {
        let flag = false;

        const roomObject = GetOwnRoomObject();

        if(roomObject)
        {
            const carryId = roomObject.model.getValue<number>(RoomObjectVariable.FIGURE_CARRY_OBJECT);

            if((carryId > 0) && (carryId < 999999)) flag = true;
        }

        return flag;
    }, []);

    const processAction = (name: string) =>
    {
        let hideMenu = true;

        if(name)
        {
            switch(name)
            {
                case 'attack':
                    AttackUser(avatarInfo.webID);
                    break;
                case 'whisper':
                    DispatchUiEvent(new RoomWidgetUpdateChatInputContentEvent(RoomWidgetUpdateChatInputContentEvent.WHISPER, avatarInfo.name));
                    break;
                case 'friend':
                    CreateLinkEvent(`friends/request/${ avatarInfo.webID }/${ avatarInfo.name }`);
                    break;
                case 'trade':
                    SendMessageComposer(new TradingOpenComposer(avatarInfo.roomIndex));
                    break;
                case 'pass_hand_item':
                    SendMessageComposer(new RoomUnitGiveHandItemComposer(avatarInfo.webID));
                    break;
            }
        }

        if(hideMenu) onClose();
    }

    useEffect(() =>
    {
        setMode(MODE_NORMAL);
    }, [ avatarInfo ]);

    return (
        <ContextMenuView objectId={ avatarInfo.roomIndex } category={ RoomObjectCategory.UNIT } userType={ avatarInfo.userType } onClose={ onClose } collapsable={ true }>
            <ContextMenuHeaderView className="cursor-pointer" onClick={ event => GetUserProfile(avatarInfo.webID) }>
                { avatarInfo.name }
            </ContextMenuHeaderView>
            { (mode === MODE_NORMAL) &&
                <>
                    <ContextMenuListItemView onClick={ event => processAction('attack') }>
                        { LocalizeText('infostand.button.attack') }
                    </ContextMenuListItemView>
                    { canRequestFriend(avatarInfo.webID) &&
                        <ContextMenuListItemView onClick={ event => processAction('friend') }>
                            { LocalizeText('infostand.button.friend') }
                        </ContextMenuListItemView> }
                    <ContextMenuListItemView onClick={ event => processAction('trade') }>
                        { LocalizeText('infostand.button.trade') }
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={ event => processAction('whisper') }>
                        { LocalizeText('infostand.button.whisper') }
                    </ContextMenuListItemView>
                    { canGiveHandItem && <ContextMenuListItemView onClick={ event => processAction('pass_hand_item') }>
                        { LocalizeText('avatar.widget.pass_hand_item') }
                    </ContextMenuListItemView> }
                </> }
        </ContextMenuView>
    );
}
