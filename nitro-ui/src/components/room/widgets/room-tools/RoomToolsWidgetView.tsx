import { CreateLinkEvent, GetSessionDataManager } from '../../../../api';
import { Column, Flex } from '../../../../common';
import { FaCamera, FaCog, FaShieldAlt } from 'react-icons/fa';

export function RoomToolsWidgetView() {
    const isMod = GetSessionDataManager().isModerator;
    const handleToolClick = (action: string, value?: string) =>
    {
        switch(action)
        {
            case 'settings':
                CreateLinkEvent('navigator/toggle-room-info');
                return;
            case 'chat_history':
                CreateLinkEvent('chat-history/toggle');
                return;
        }
    }
    return (
        <Flex className="nitro-room-tools-container" gap={ 2 }>
            <Column center className="nitro-room-tools p-2">
                <FaCog size={20} style={{cursor: 'pointer'}}  onClick={() => handleToolClick('settings')}/>
                <FaCamera  size={20}  style={{cursor: 'pointer'}}onClick={() => handleToolClick('chat_history')}/> 
                {isMod && <FaShieldAlt size={20} style={{cursor: 'pointer'}} onClick={() => CreateLinkEvent('mod-tools/toggle')}  />}
            </Column>
        </Flex>
    );
}
