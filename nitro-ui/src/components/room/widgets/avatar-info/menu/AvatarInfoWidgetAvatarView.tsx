import { RoomObjectCategory, RoomObjectVariable, RoomUnitGiveHandItemComposer, TradingOpenComposer } from '@nitro-rp/renderer';
import { FC, useEffect, useMemo, useState } from 'react';
import { AvatarInfoUser, CreateLinkEvent, DispatchUiEvent, GetOwnRoomObject, GetUserProfile, LocalizeText, RoomWidgetUpdateChatInputContentEvent, SendMessageComposer } from '../../../../../api';
import { useFriends } from '../../../../../hooks';
import { ContextMenuHeaderView } from '../../context-menu/ContextMenuHeaderView';
import { ContextMenuListItemView } from '../../context-menu/ContextMenuListItemView';
import { ContextMenuView } from '../../context-menu/ContextMenuView';
import { AttackUser } from '../../../../../api/roleplay/AttackUser';
import { GangInviteUser } from '../../../../../api/roleplay/GangInviteUser';
import { CorpDemoteUser } from '../../../../../api/roleplay/CorpDemoteUser';
import { CorpPromoteUser } from '../../../../../api/roleplay/CorpPromoteUser';
import { CorpFireUser } from '../../../../../api/roleplay/CorpFireUser';
import { CorpOfferJob } from '../../../../../api/roleplay/CorpOfferJob';

interface AvatarInfoWidgetAvatarViewProps
{
    avatarInfo: AvatarInfoUser;
    onClose: () => void;
}

const MODE_NORMAL = 0;
const MODE_BUSINESS = 1;
const MODE_GANG = 2;

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
                case 'back':
                    hideMenu = false
                    setMode(MODE_NORMAL);
                    break;
                case 'attack':
                    hideMenu = false
                    AttackUser(avatarInfo.name);
                    break;
                case 'view_business':
                    hideMenu = false
                     setMode(MODE_BUSINESS);
                    break;
                case 'view_gang':
                        hideMenu = false
                     setMode(MODE_GANG);
                    break;
                case 'corp_offer_job':
                     CorpOfferJob(avatarInfo.name);
                    break;
                case 'corp_fire_user':
                     CorpFireUser(avatarInfo.name);
                    break;
                case 'corp_promote_user':
                     CorpPromoteUser(avatarInfo.name);
                    break;
                case 'corp_demote_user':
                     CorpDemoteUser(avatarInfo.name);
                    break;
                case 'gang_invite_user':
                     GangInviteUser(avatarInfo.name);
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
            {
                mode !== MODE_NORMAL && (
                <ContextMenuListItemView onClick={ event => processAction('back') }>
                    { LocalizeText('infostand.button.back') }
                </ContextMenuListItemView>
                )
            }
            { (mode === MODE_NORMAL) &&
                <>
                    <ContextMenuListItemView onClick={ event => processAction('attack') }>
                        { LocalizeText('infostand.button.attack') }
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={ event => processAction('view_business') }>
                        { LocalizeText('infostand.button.business') }
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={ event => processAction('view_gang') }>
                        { LocalizeText('infostand.button.gang') }
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
            { (mode === MODE_BUSINESS) &&
                <>
                    <ContextMenuListItemView onClick={ event => processAction('corp_offer_job') }>
                        { LocalizeText('infostand.button.corp_offer_job') }
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={ event => processAction('corp_fire_user') }>
                        { LocalizeText('infostand.button.corp_fire_user') }
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={ event => processAction('corp_promote_user') }>
                        { LocalizeText('infostand.button.corp_promote_user') }
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={ event => processAction('corp_demote_user') }>
                        { LocalizeText('infostand.button.corp_demote_user') }
                    </ContextMenuListItemView>
                </> }
            { (mode === MODE_GANG) &&
                <>
                    <ContextMenuListItemView onClick={ event => processAction('gang_invite_user') }>
                        { LocalizeText('infostand.button.gang_invite_user') }
                    </ContextMenuListItemView>
                </> }
        </ContextMenuView>
    );
}
