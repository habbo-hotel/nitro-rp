import { RoomChatSettings } from '@nitro-rp/renderer';
import { FC, useEffect, useState } from 'react';
import { IRoomData, LocalizeText } from '../../../../api';
import { Column, Flex, Grid, Text } from '../../../../common';

interface NavigatorRoomSettingsTabViewProps
{
    roomData: IRoomData;
    handleChange: (field: string, value: string | number | boolean) => void;
}

export const NavigatorRoomSettingsVipChatTabView: FC<NavigatorRoomSettingsTabViewProps> = props =>
{
    const { roomData = null, handleChange = null } = props;
    const [ chatDistance, setChatDistance ] = useState<number>(0);

    useEffect(() =>
    {
        setChatDistance(roomData.chatSettings.distance);
    }, [ roomData.chatSettings ]);

    return (
        <>
            <Column gap={ 1 }>
                <Text bold>{ LocalizeText('navigator.roomsettings.vip.caption') }</Text>
                <Text>{ LocalizeText('navigator.roomsettings.vip.info') }</Text>
            </Column>
            <Grid overflow="auto">
                <Column size={ 6 } gap={ 1 }>
                    <Text>{ LocalizeText('navigator.roomsettings.chat_settings.hearing.distance') }</Text>
                    <input type="number" min="0" className="form-control form-control-sm" value={ chatDistance } onChange={ event => setChatDistance(event.target.valueAsNumber) } onBlur={ event => handleChange('chat_distance', chatDistance) } />
                </Column>
                <Column size={ 6 } gap={ 1 }>
                    <Text bold>{ LocalizeText('navigator.roomsettings.vip_settings') }</Text>
                    <Flex alignItems="center" gap={ 1 }>
                        <input className="form-check-input" type="checkbox" checked={ roomData.hideWalls } onChange={ event => handleChange('hide_walls', event.target.checked) } />
                        <Text>{ LocalizeText('navigator.roomsettings.hide_walls') }</Text>
                    </Flex>
                    <select className="form-select form-select-sm" value={ roomData.wallThickness } onChange={ event => handleChange('wall_thickness', event.target.value) }>
                        <option value="0">{ LocalizeText('navigator.roomsettings.wall_thickness.normal') }</option>
                        <option value="1">{ LocalizeText('navigator.roomsettings.wall_thickness.thick') }</option>
                        <option value="-1">{ LocalizeText('navigator.roomsettings.wall_thickness.thin') }</option>
                        <option value="-2">{ LocalizeText('navigator.roomsettings.wall_thickness.thinnest') }</option>
                    </select>
                    <select className="form-select form-select-sm" value={ roomData.floorThickness } onChange={ event => handleChange('floor_thickness', event.target.value) }>
                        <option value="0">{ LocalizeText('navigator.roomsettings.floor_thickness.normal') }</option>
                        <option value="1">{ LocalizeText('navigator.roomsettings.floor_thickness.thick') }</option>
                        <option value="-1">{ LocalizeText('navigator.roomsettings.floor_thickness.thin') }</option>
                        <option value="-2">{ LocalizeText('navigator.roomsettings.floor_thickness.thinnest') }</option>
                    </select>
                </Column>
            </Grid>
        </>
    );
}
