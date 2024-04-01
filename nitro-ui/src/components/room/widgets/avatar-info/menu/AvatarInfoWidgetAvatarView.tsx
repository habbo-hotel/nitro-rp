import { RoomObjectCategory, RoomObjectVariable, RoomUnitGiveHandItemComposer, TradingOpenComposer } from '@nitro-rp/renderer';
import { FC, useEffect, useMemo, useState } from 'react';
import { AvatarInfoUser, CreateLinkEvent, DispatchUiEvent, GetOwnRoomObject, GetUserProfile, LocalizeText, RoomWidgetUpdateChatInputContentEvent, SendMessageComposer } from '../../../../../api';
import { useFriends, useSessionInfo } from '../../../../../hooks';
import { ContextMenuHeaderView } from '../../context-menu/ContextMenuHeaderView';
import { ContextMenuListItemView } from '../../context-menu/ContextMenuListItemView';
import { ContextMenuView } from '../../context-menu/ContextMenuView';
import { AttackUser } from '../../../../../api/roleplay/combat/AttackUser';
import { GangInviteUser } from '../../../../../api/roleplay/gang/GangInviteUser';
import { CorpDemoteUser } from '../../../../../api/roleplay/corp/CorpDemoteUser';
import { CorpPromoteUser } from '../../../../../api/roleplay/corp/CorpPromoteUser';
import { CorpFireUser } from '../../../../../api/roleplay/corp/CorpFireUser';
import { CorpOfferJob } from '../../../../../api/roleplay/corp/CorpOfferJob';
import { FaChevronRight } from 'react-icons/fa';
import { useRoleplayStats } from '../../../../../hooks/roleplay/use-rp-stats';
import { PoliceUncuffUser } from '../../../../../api/roleplay/police/PoliceUncuffUser';
import { PoliceArrestUser } from '../../../../../api/roleplay/police/PoliceArrestUser';
import { PoliceCuffUser } from '../../../../../api/roleplay/police/PoliceCuffUser';
import { PoliceStunUser } from '../../../../../api/roleplay/police/PoliceStunUser';

interface AvatarInfoWidgetAvatarViewProps
{
    avatarInfo: AvatarInfoUser;
    onClose: () => void;
}

const MODE_NORMAL = 0;
const MODE_BUSINESS = 1;
const MODE_GANG = 2;
const MODE_POLICE = 3;

export const AvatarInfoWidgetAvatarView: FC<AvatarInfoWidgetAvatarViewProps> = props =>
{
    const { userInfo: sessionInfo } = useSessionInfo();
    const { avatarInfo = null, onClose = null } = props;
    const roleplayStats = useRoleplayStats(avatarInfo?.webID);
    const sessionRoleplayStats = useRoleplayStats(sessionInfo?.userId);
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
                case 'view_police':
                        hideMenu = false
                     setMode(MODE_POLICE);
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
                case 'police_stun':
                     PoliceStunUser(avatarInfo.name);
                    break;
                case 'police_cuff':
                     PoliceCuffUser(avatarInfo.name);
                    break;
                case 'police_uncuff':
                     PoliceUncuffUser(avatarInfo.name);
                    break;
                case 'police_arrest':
                     PoliceArrestUser(avatarInfo.name);
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
                { roleplayStats.isDead && '☠️'  }
                { avatarInfo.name }
            </ContextMenuHeaderView>
            {
                roleplayStats.isDead && (
                    <ContextMenuListItemView>
                        { LocalizeText('infostand.button.user_is_dead').replace(':user', avatarInfo.name) }
                    </ContextMenuListItemView>
                )
            }
           {
            !roleplayStats.isDead && (
                <>
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
                        <FaChevronRight className="right fa-icon" />
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={ event => processAction('view_gang') }>
                        <FaChevronRight className="right fa-icon" />
                        { LocalizeText('infostand.button.gang') }
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={ event => processAction('view_police') }>
                        <FaChevronRight className="right fa-icon" />
                        { LocalizeText('infostand.button.police') }
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
                {
                    roleplayStats.corporationID !== sessionRoleplayStats.corporationID && (
                        <ContextMenuListItemView onClick={ event => processAction('corp_offer_job') }>
                            { LocalizeText('infostand.button.corp_offer_job') }
                        </ContextMenuListItemView>
                    )
                }
                {
                    roleplayStats.corporationID === sessionRoleplayStats.corporationID && (
                        <>
                            <ContextMenuListItemView onClick={ event => processAction('corp_fire_user') }>
                            { LocalizeText('infostand.button.corp_fire_user') }
                            </ContextMenuListItemView>
                            <ContextMenuListItemView onClick={ event => processAction('corp_promote_user') }>
                                { LocalizeText('infostand.button.corp_promote_user') }
                            </ContextMenuListItemView>
                            <ContextMenuListItemView onClick={ event => processAction('corp_demote_user') }>
                                { LocalizeText('infostand.button.corp_demote_user') }
                            </ContextMenuListItemView>
                        </>
                    )
                }
                </> }
            { (mode === MODE_GANG) &&
                <>
                {
                    roleplayStats.gangID !== sessionRoleplayStats.gangID && (
                        <>
                        <ContextMenuListItemView onClick={ event => processAction('gang_invite_user') }>
                            { LocalizeText('infostand.button.gang_invite_user') }
                        </ContextMenuListItemView>     
                        </>                 
                    )
                }
                </> 
            }
            { (mode === MODE_POLICE) &&
                <>
                {
                    !roleplayStats.isCuffed && !roleplayStats.isStunned && !roleplayStats.isDead && (
                        <ContextMenuListItemView onClick={ event => processAction('police_stun') }>
                            { LocalizeText('infostand.button.police_stun') }
                        </ContextMenuListItemView>
                    )
                }
                    {
                        roleplayStats.isCuffed ? (
                            <>
                                <ContextMenuListItemView onClick={ event => processAction('police_uncuff') }>
                                    { LocalizeText('infostand.button.police_uncuff') }
                                </ContextMenuListItemView>
                                <ContextMenuListItemView onClick={ event => processAction('police_arrest') }>
                                    { LocalizeText('infostand.button.police_arrest') }
                                </ContextMenuListItemView>
                            </>
                        ) :
                        <ContextMenuListItemView onClick={ event => processAction('police_cuff') }>
                            { LocalizeText('infostand.button.police_cuff') }
                        </ContextMenuListItemView>
                    }
                </> 
            }
            </>
            )
           }
        </ContextMenuView>
    );
}
