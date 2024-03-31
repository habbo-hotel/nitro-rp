import { useNavigator } from '../../hooks';
import { Base, Column, Flex, Text } from '../../common';

export function RoomInformationView() {
    const { navigatorData = null } = useNavigator();

    if(!navigatorData?.enteredGuestRoom) return null;

    return (
        <Base className="nitro-notification-bubble rounded">
            <div className="d-flex" style={{justifyContent: 'space-between'}}>
                <Flex pointer alignItems="center" gap={ 2}>
                    <Text bold variant="white">Exploring:</Text>
                    <Text variant="white">{ navigatorData.enteredGuestRoom.roomName }</Text>
                </Flex>
                <Flex pointer alignItems="center" gap={ 2}>
                    <Text variant="white">4:40pm</Text>
                </Flex>
            </div>
        </Base>
    );
};
