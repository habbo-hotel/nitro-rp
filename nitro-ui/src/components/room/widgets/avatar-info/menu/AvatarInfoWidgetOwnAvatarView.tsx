import { AvatarAction, AvatarExpressionEnum, MyWeaponData, RoomObjectCategory, RoomUnitDropHandItemComposer } from '@nitro-rp/renderer';
import { FC, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AvatarInfoUser, CreateLinkEvent, GetCanStandUp, GetCanUseExpression, GetOwnPosture, GetUserProfile, HasHabboClub, HasHabboVip, IsRidingHorse, LocalizeText, PostureTypeEnum, SendMessageComposer } from '../../../../../api';
import { Flex, LayoutCurrencyIcon } from '../../../../../common';
import { useRoom } from '../../../../../hooks';
import { ContextMenuHeaderView } from '../../context-menu/ContextMenuHeaderView';
import { ContextMenuListItemView } from '../../context-menu/ContextMenuListItemView';
import { ContextMenuView } from '../../context-menu/ContextMenuView';
import { CorpStopWork } from '../../../../../api/roleplay/corp/CorpStopWork';
import { CorpStartWork } from '../../../../../api/roleplay/corp/CorpStartWork';
import { GangLeave } from '../../../../../api/roleplay/gang/GangLeave';
import { GangDisband } from '../../../../../api/roleplay/gang/GangDisband';
import { useRoleplayStats } from '../../../../../hooks/roleplay/use-rp-stats';
import { useMyWeaponList } from '../../../../../hooks/roleplay/use-my-weapon-list';
import { EquipWeapon } from '../../../../../api/roleplay/combat/EquipWeapon';

interface AvatarInfoWidgetOwnAvatarViewProps {
    avatarInfo: AvatarInfoUser;
    isDancing: boolean;
    onClose: () => void;
}

const MODE_NORMAL = 0;
const MODE_CLUB_DANCES = 1;
const MODE_EXPRESSIONS = 3;
const MODE_SIGNS = 4;
const MODE_BUSINESS = 5;
const MODE_GANGS = 6;
const MODE_WEAPONS = 7;

export const AvatarInfoWidgetOwnAvatarView: FC<AvatarInfoWidgetOwnAvatarViewProps> = props => {
    const { avatarInfo = null, isDancing = false, onClose = null } = props;

    const roleplayStats = useRoleplayStats(avatarInfo?.webID);
    const weaponList = useMyWeaponList();
    const [mode, setMode] = useState((isDancing && HasHabboClub()) ? MODE_CLUB_DANCES : MODE_NORMAL);
    const { roomSession = null } = useRoom();

    const processAction = (name: string) => {
        let hideMenu = true;

        if (name) {
            if (name.startsWith('sign_')) {
                const sign = parseInt(name.split('_')[1]);

                roomSession.sendSignMessage(sign);
            }
            else {
                switch (name) {
                    case 'view_business':
                        hideMenu = false;
                        setMode(MODE_BUSINESS);
                        break;
                    case 'view_gang':
                        hideMenu = false;
                        setMode(MODE_GANGS);
                        break;
                    case 'view_weapons':
                        hideMenu = false;
                        setMode(MODE_WEAPONS);
                        break;
                    case 'startwork':
                        CorpStartWork()
                        break;
                    case 'stopwork':
                        CorpStopWork();
                        break;
                    case 'leavegang':
                        GangLeave();
                        break;
                    case 'disbandgang':
                        GangDisband();
                        break;
                    case 'formgang':
                        CreateLinkEvent('groups/create-gang');
                        break;
                    case 'expressions':
                        hideMenu = false;
                        setMode(MODE_EXPRESSIONS);
                        break;
                    case 'sit':
                        roomSession.sendPostureMessage(PostureTypeEnum.POSTURE_SIT);
                        break;
                    case 'stand':
                        roomSession.sendPostureMessage(PostureTypeEnum.POSTURE_STAND);
                        break;
                    case 'wave':
                        roomSession.sendExpressionMessage(AvatarExpressionEnum.WAVE.ordinal);
                        break;
                    case 'blow':
                        roomSession.sendExpressionMessage(AvatarExpressionEnum.BLOW.ordinal);
                        break;
                    case 'laugh':
                        roomSession.sendExpressionMessage(AvatarExpressionEnum.LAUGH.ordinal);
                        break;
                    case 'idle':
                        roomSession.sendExpressionMessage(AvatarExpressionEnum.IDLE.ordinal);
                        break;
                    case 'dance_menu':
                        hideMenu = false;
                        setMode(MODE_CLUB_DANCES);
                        break;
                    case 'dance':
                        roomSession.sendDanceMessage(1);
                        break;
                    case 'dance_stop':
                        roomSession.sendDanceMessage(0);
                        break;
                    case 'dance_1':
                    case 'dance_2':
                    case 'dance_3':
                    case 'dance_4':
                        roomSession.sendDanceMessage(parseInt(name.charAt((name.length - 1))));
                        break;
                    case 'signs':
                        hideMenu = false;
                        setMode(MODE_SIGNS);
                        break;
                    case 'back':
                        hideMenu = false;
                        setMode(MODE_NORMAL);
                        break;
                    case 'drop_carry_item':
                        SendMessageComposer(new RoomUnitDropHandItemComposer());
                        break;
                }
            }
        }

        if (hideMenu) onClose();
    }

    const isRidingHorse = IsRidingHorse();

    function onEquip(weapon: MyWeaponData) {
        EquipWeapon(weapon.uniqueName);
        onClose();
    }

    return (
        <ContextMenuView objectId={avatarInfo.roomIndex} category={RoomObjectCategory.UNIT} userType={avatarInfo.userType} onClose={onClose} collapsable={true}>

            <ContextMenuHeaderView className="cursor-pointer" onClick={event => GetUserProfile(avatarInfo.webID)}>
                {avatarInfo.name}
            </ContextMenuHeaderView>
            {(mode === MODE_NORMAL) &&
                <>
                    <ContextMenuListItemView onClick={event => processAction('view_business')}>
                        <FaChevronRight className="right fa-icon" />
                        {LocalizeText('infostand.button.business')}
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={event => processAction('view_gang')}>
                        <FaChevronRight className="right fa-icon" />
                        {LocalizeText('infostand.button.gang')}
                    </ContextMenuListItemView>
                    {
                        weaponList.length > 0 && (
                            <ContextMenuListItemView onClick={event => processAction('view_weapons')}>
                                <FaChevronRight className="right fa-icon" />
                                {LocalizeText('infostand.button.weapons')}
                            </ContextMenuListItemView>
                        )
                    }
                    {!isRidingHorse &&
                        <ContextMenuListItemView onClick={event => processAction('dance_menu')}>
                            <FaChevronRight className="right fa-icon" />
                            {LocalizeText('widget.memenu.dance')}
                        </ContextMenuListItemView>}
                    <ContextMenuListItemView onClick={event => processAction('expressions')}>
                        <FaChevronRight className="right fa-icon" />
                        {LocalizeText('infostand.link.expressions')}
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={event => processAction('signs')}>
                        <FaChevronRight className="right fa-icon" />
                        {LocalizeText('infostand.show.signs')}
                    </ContextMenuListItemView>
                    {(avatarInfo.carryItem > 0) &&
                        <ContextMenuListItemView onClick={event => processAction('drop_carry_item')}>
                            {LocalizeText('avatar.widget.drop_hand_item')}
                        </ContextMenuListItemView>}
                </>}
            {(mode === MODE_CLUB_DANCES) &&
                <>
                    {isDancing &&
                        <ContextMenuListItemView onClick={event => processAction('dance_stop')}>
                            {LocalizeText('widget.memenu.dance.stop')}
                        </ContextMenuListItemView>}
                    <ContextMenuListItemView onClick={event => processAction('dance_1')}>
                        {LocalizeText('widget.memenu.dance1')}
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={event => processAction('dance_2')}>
                        {LocalizeText('widget.memenu.dance2')}
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={event => processAction('dance_3')}>
                        {LocalizeText('widget.memenu.dance3')}
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={event => processAction('dance_4')}>
                        {LocalizeText('widget.memenu.dance4')}
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={event => processAction('back')}>
                        <FaChevronLeft className="left fa-icon" />
                        {LocalizeText('generic.back')}
                    </ContextMenuListItemView>
                </>}
            {(mode === MODE_EXPRESSIONS) &&
                <>
                    {(GetOwnPosture() === AvatarAction.POSTURE_STAND) &&
                        <ContextMenuListItemView onClick={event => processAction('sit')}>
                            {LocalizeText('widget.memenu.sit')}
                        </ContextMenuListItemView>}
                    {GetCanStandUp() &&
                        <ContextMenuListItemView onClick={event => processAction('stand')}>
                            {LocalizeText('widget.memenu.stand')}
                        </ContextMenuListItemView>}
                    {GetCanUseExpression() &&
                        <ContextMenuListItemView onClick={event => processAction('wave')}>
                            {LocalizeText('widget.memenu.wave')}
                        </ContextMenuListItemView>}
                    {GetCanUseExpression() &&
                        <ContextMenuListItemView disabled={!HasHabboVip()} onClick={event => processAction('laugh')}>
                            {!HasHabboVip() && <LayoutCurrencyIcon type="hc" />}
                            {LocalizeText('widget.memenu.laugh')}
                        </ContextMenuListItemView>}
                    {GetCanUseExpression() &&
                        <ContextMenuListItemView disabled={!HasHabboVip()} onClick={event => processAction('blow')}>
                            {!HasHabboVip() && <LayoutCurrencyIcon type="hc" />}
                            {LocalizeText('widget.memenu.blow')}
                        </ContextMenuListItemView>}
                    <ContextMenuListItemView onClick={event => processAction('idle')}>
                        {LocalizeText('widget.memenu.idle')}
                    </ContextMenuListItemView>
                    <ContextMenuListItemView onClick={event => processAction('back')}>
                        <FaChevronLeft className="left fa-icon" />
                        {LocalizeText('generic.back')}
                    </ContextMenuListItemView>
                </>}
            {(mode === MODE_SIGNS) &&
                <>
                    <Flex className="menu-list-split-3">
                        <ContextMenuListItemView onClick={event => processAction('sign_1')}>
                            1
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_2')}>
                            2
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_3')}>
                            3
                        </ContextMenuListItemView>
                    </Flex>
                    <Flex className="menu-list-split-3">
                        <ContextMenuListItemView onClick={event => processAction('sign_4')}>
                            4
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_5')}>
                            5
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_6')}>
                            6
                        </ContextMenuListItemView>
                    </Flex>
                    <Flex className="menu-list-split-3">
                        <ContextMenuListItemView onClick={event => processAction('sign_7')}>
                            7
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_8')}>
                            8
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_9')}>
                            9
                        </ContextMenuListItemView>
                    </Flex>
                    <Flex className="menu-list-split-3">
                        <ContextMenuListItemView onClick={event => processAction('sign_10')}>
                            10
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_11')}>
                            <i className="icon icon-sign-heart" />
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_12')}>
                            <i className="icon icon-sign-skull" />
                        </ContextMenuListItemView>
                    </Flex>
                    <Flex className="menu-list-split-3">
                        <ContextMenuListItemView onClick={event => processAction('sign_0')}>
                            0
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_13')}>
                            <i className="icon icon-sign-exclamation" />
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_15')}>
                            <i className="icon icon-sign-smile" />
                        </ContextMenuListItemView>
                    </Flex>
                    <Flex className="menu-list-split-3">
                        <ContextMenuListItemView onClick={event => processAction('sign_14')}>
                            <i className="icon icon-sign-soccer" />
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_17')}>
                            <i className="icon icon-sign-yellow" />
                        </ContextMenuListItemView>
                        <ContextMenuListItemView onClick={event => processAction('sign_16')}>
                            <i className="icon icon-sign-red" />
                        </ContextMenuListItemView>
                    </Flex>
                    <ContextMenuListItemView onClick={event => processAction('back')}>
                        <FaChevronLeft className="left fa-icon" />
                        {LocalizeText('generic.back')}
                    </ContextMenuListItemView>
                </>}
            {(mode === MODE_BUSINESS) &&
                <>
                    {roleplayStats.isWorking && (
                        <ContextMenuListItemView onClick={event => processAction('stopwork')}>
                            {LocalizeText('widget.memenu.stopwork')}
                        </ContextMenuListItemView>
                    )}
                    {!roleplayStats.isWorking && (
                        <ContextMenuListItemView onClick={event => processAction('startwork')}>
                            {LocalizeText('widget.memenu.startwork')}
                        </ContextMenuListItemView>
                    )}
                    <ContextMenuListItemView onClick={event => processAction('back')}>
                        <FaChevronLeft className="left fa-icon" />
                        {LocalizeText('generic.back')}
                    </ContextMenuListItemView>
                </>}
            {(mode === MODE_GANGS) &&
                <>
                    {
                        roleplayStats.gangID ? (
                            <>
                                <ContextMenuListItemView onClick={event => processAction('leavegang')}>
                                    {LocalizeText('widget.memenu.leavegang')}
                                </ContextMenuListItemView>
                                <ContextMenuListItemView onClick={event => processAction('disbandgang')}>
                                    {LocalizeText('widget.memenu.disbandgang')}
                                </ContextMenuListItemView>
                            </>
                        )
                            : (
                                <>
                                    <ContextMenuListItemView onClick={event => processAction('formgang')}>
                                        {LocalizeText('widget.memenu.formgang')}
                                    </ContextMenuListItemView>
                                </>
                            )
                    }
                    <ContextMenuListItemView onClick={event => processAction('back')}>
                        <FaChevronLeft className="left fa-icon" />
                        {LocalizeText('generic.back')}
                    </ContextMenuListItemView>
                </>
            }
            {(mode === MODE_WEAPONS) && (
                <>
                    <ContextMenuListItemView onClick={event => processAction('back')}>
                        <FaChevronLeft className="left fa-icon" />
                        {LocalizeText('generic.back')}
                    </ContextMenuListItemView>
                    {
                        weaponList.map(_ => (
                            <ContextMenuListItemView key={`weapon_${_.uniqueName}`} onClick={() => onEquip(_)}>
                                {_.displayName}
                            </ContextMenuListItemView>
                        ))
                    }
                </>
            )}
        </ContextMenuView >
    );
}
