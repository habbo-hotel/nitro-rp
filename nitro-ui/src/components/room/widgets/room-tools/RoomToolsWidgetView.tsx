import { FC } from 'react';
import { CreateLinkEvent, LocalizeText } from '../../../../api';
import { Base, Column, Flex } from '../../../../common';

export const RoomToolsWidgetView: FC<{}> = () =>
{
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
                <Base pointer title={ LocalizeText('room.settings.button.text') } className="icon icon-cog" onClick={ () => handleToolClick('settings') } />
                <Base pointer title={ LocalizeText('room.chathistory.button.text') } onClick={ () => handleToolClick('chat_history') } className="icon icon-chat-history" />
            </Column>
        </Flex>
    );
}
