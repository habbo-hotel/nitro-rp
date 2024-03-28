import { MouseEventType, RoomObjectCategory } from '@nitro-rp/renderer';
import { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useRef } from 'react';
import { CreateLinkEvent, GetRoomEngine, GetRoomSession, GetSessionDataManager, GetUserProfile } from '../../api';
import { Base, Flex } from '../../common';

interface ToolbarMeViewProps
{
    setMeExpanded: Dispatch<SetStateAction<boolean>>;
}

export const ToolbarMeView: FC<PropsWithChildren<ToolbarMeViewProps>> = props =>
{
    const {setMeExpanded = null, children = null } = props;
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
            <Base pointer className="navigation-item icon icon-me-profile" onClick={ () => GetUserProfile(GetSessionDataManager().userId) } />
            <Base pointer className="navigation-item icon icon-me-clothing" onClick={ () => CreateLinkEvent('avatar-editor/toggle') } />
            <Base pointer className="navigation-item icon icon-me-settings" onClick={ () => CreateLinkEvent('user-settings/toggle') } />
            { children }
        </Flex>
    );
}
