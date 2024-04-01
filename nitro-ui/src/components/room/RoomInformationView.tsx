import { useMessageEvent, useNavigator } from '../../hooks';
import { Base, Flex, Text } from '../../common';
import { useEffect, useState } from 'react';
import { TimeOfDayEvent } from '@nitro-rp/renderer';
import { timeOfDayQuery } from '../../api/roleplay/game/TimeOfDayQuery';

export function RoomInformationView() {
    const [timeOfDay, setTimeOfDay] = useState('0:00');
    const { navigatorData = null } = useNavigator();

    useEffect(() => {
        timeOfDayQuery();
    }, []);

    useMessageEvent<TimeOfDayEvent>(TimeOfDayEvent, event => {
        const parser = event.getParser();
        if(!parser) return;
        setTimeOfDay(parser.serverTime);
    });


    if(!navigatorData?.enteredGuestRoom) return null;

    return (
        <Base className="nitro-notification-bubble rounded">
            <div className="d-flex" style={{justifyContent: 'space-between'}}>
                <Flex pointer alignItems="center" gap={ 2}>
                    <Text bold variant="white">{ navigatorData.enteredGuestRoom.roomName }</Text>
                </Flex>
                <Flex pointer alignItems="center" gap={ 2}>
                    <Text bold variant="white">{timeOfDay}</Text>
                </Flex>
            </div>
        </Base>
    );
};
