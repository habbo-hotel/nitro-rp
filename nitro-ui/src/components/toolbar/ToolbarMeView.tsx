import { MouseEventType, RoomObjectCategory } from '@nitro-rp/renderer';
import { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useRef } from 'react';
import { CreateLinkEvent, DispatchUiEvent, GetConfiguration, GetRoomEngine, GetRoomSession, GetSessionDataManager, GetUserProfile } from '../../api';
import { Base, Flex, LayoutItemCountView } from '../../common';

interface ToolbarMeViewProps
{
    unseenAchievementCount: number;
    setMeExpanded: Dispatch<SetStateAction<boolean>>;
}

export const ToolbarMeView: FC<PropsWithChildren<ToolbarMeViewProps>> = props =>
{
    const {unseenAchievementCount = 0, setMeExpanded = null, children = null, ...rest } = props;
    const elementRef = useRef<HTMLDivElement>();

    useEffect(() =>
    {
        const roomSession = GetRoomSession();

        if(!roomSession) return;

        GetRoomEngine().selectRoomObject(roomSession.roomId, roomSession.ownRoomIndex, RoomObjectCategory.UNIT);
    }, []);

    useEffect(() =>
    {
        const onClick = (event: MouseEvent) => setMeExpanded(false);

        document.addEventListener('click', onClick);

        return () => document.removeEventListener(MouseEventType.MOUSE_CLICK, onClick);
    }, [ setMeExpanded ]);

    return (
        <Flex innerRef={ elementRef } alignItems="center" className="nitro-toolbar-me p-2" gap={ 2 }>
            <Base pointer className="navigation-item icon icon-me-achievements" onClick={ event => CreateLinkEvent('achievements/toggle') }>
                { (unseenAchievementCount > 0) &&
                    <LayoutItemCountView count={ unseenAchievementCount } /> }
            </Base>
            <Base pointer className="navigation-item icon icon-me-profile" onClick={ event => GetUserProfile(GetSessionDataManager().userId) } />
            <Base pointer className="navigation-item icon icon-me-rooms" onClick={ event => CreateLinkEvent('navigator/search/myworld_view') } />
            <Base pointer className="navigation-item icon icon-me-clothing" onClick={ event => CreateLinkEvent('avatar-editor/toggle') } />
            <Base pointer className="navigation-item icon icon-me-settings" onClick={ event => CreateLinkEvent('user-settings/toggle') } />
            { children }
        </Flex>
    );
}
