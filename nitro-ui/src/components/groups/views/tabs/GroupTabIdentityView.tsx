import { GroupDeleteComposer, GroupSaveInformationComposer, GroupType } from '@nitro-rp/renderer';
import { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react';
import { CreateLinkEvent, IGroupData, LocalizeText, SendMessageComposer } from '../../../../api';
import { Base, Button, Column, Flex, Text } from '../../../../common';
import { useNotification } from '../../../../hooks';

interface GroupTabIdentityViewProps
{
    groupData: IGroupData;
    setGroupData: Dispatch<SetStateAction<IGroupData>>;
    setCloseAction: Dispatch<SetStateAction<{ action: () => boolean }>>;
    onClose: () => void;
    isCreator?: boolean;
    availableRooms?: { id: number, name: string }[];
}

export const GroupTabIdentityView: FC<GroupTabIdentityViewProps> = props =>
{
    const { groupData = null, setGroupData = null, setCloseAction = null, onClose = null, isCreator = false, availableRooms = [] } = props;
    const [ groupType, setGroupType ] = useState<GroupType>(groupData?.groupType ?? GroupType.Group);
    const [ groupName, setGroupName ] = useState<string>('');
    const [ groupDescription, setGroupDescription ] = useState<string>('');
    const [ groupHomeroomId, setGroupHomeroomId ] = useState<number>(-1);
    const { showConfirm = null } = useNotification();

    const deleteGroup = () =>
    {
        if(!groupData || (groupData.groupId <= 0)) return;

        showConfirm(LocalizeText('group.deleteconfirm.desc'), () =>
        {
            SendMessageComposer(new GroupDeleteComposer(groupData.groupId));
                
            if(onClose) onClose();
        }, null, null, null, LocalizeText('group.deleteconfirm.title'));
    }

    const saveIdentity = useCallback(() =>
    {
        if(!groupData || !groupName || !groupName.length) return false;

        if((groupName === groupData.groupName) && (groupDescription === groupData.groupDescription)) return true;

        if(groupData.groupId <= 0)
        {
            if(groupHomeroomId <= 0) return false;

            setGroupData(prevValue => ({
                ...prevValue,
                groupType,
                groupName,
                groupDescription,
                groupHomeroomId,
            }));

            return true;
        }

        SendMessageComposer(new GroupSaveInformationComposer(groupData.groupId, groupType, groupName, (groupDescription || '')));

        return true;
    }, [ groupData, groupType, groupName, groupDescription, groupHomeroomId, setGroupData ]);

    useEffect(() =>
    {
        setGroupName(groupData.groupName || '');
        setGroupType(groupData.groupType || GroupType.Group);
        setGroupDescription(groupData.groupDescription || '');
        setGroupHomeroomId(groupData.groupHomeroomId);
    }, [ groupData ]);

    useEffect(() =>
    {
        setCloseAction({ action: saveIdentity });

        return () => setCloseAction(null);
    }, [ setCloseAction, saveIdentity ]);

    if(!groupData) return null;

    return (
        <Column justifyContent="between" overflow="auto">
            <Column gap={ 1 }>
                <Flex alignItems="center" gap={ 1 }>
                    <Text center className="col-3">{ LocalizeText('group.edit.name') }</Text>
                    <input type="text" className="form-control form-control-sm" value={ groupName } maxLength={ 29 } onChange={ event => setGroupName(event.target.value) } />
                </Flex>
                <Flex alignItems="center" gap={ 1 }>
                    <Text center className="col-3">{ LocalizeText('group.edit.desc') }</Text>
                    <textarea className="form-control form-control-sm" value={ groupDescription } maxLength={ 254 } onChange={ event => setGroupDescription(event.target.value) } />
                </Flex>
                <Flex alignItems="center" gap={ 1 }>
                            <Text center className="col-3">{ LocalizeText('group.edit.type') }</Text>
                            <Column fullWidth gap={ 1 }>
                                <select className="form-select form-select-sm" value={ groupType } disabled>
                                    { Object.values(GroupType).map(groupType => <option key={ groupType } value={ groupType }>{ groupType }</option>) }
                                </select>
                            </Column>
                        </Flex>
                { isCreator &&
                    <>
                        <Flex alignItems="center" gap={ 1 }>
                            <Text center className="col-3">{ LocalizeText('group.edit.base') }</Text>
                            <Column fullWidth gap={ 1 }>
                                <select className="form-select form-select-sm" value={ groupHomeroomId } onChange={ event => setGroupHomeroomId(parseInt(event.target.value)) }>
                                    <option value={ -1 } disabled>{ LocalizeText('group.edit.base.select.room') }</option>
                                    { availableRooms && availableRooms.map((room, index) => <option key={ index } value={ room.id }>{ room.name }</option>) }
                                </select>
                            </Column>
                        </Flex>
                        <Flex gap={ 1 }>
                            <Base className="col-3">&nbsp;</Base>
                            <Text small>{ LocalizeText('group.edit.base.warning') }</Text>
                        </Flex>
                    </> }
            </Column>
            { !isCreator &&
                <Button variant="danger" onClick={ deleteGroup }>{ LocalizeText('group.delete') }</Button> }
            { isCreator &&
                <Text underline center fullWidth pointer onClick={ event => CreateLinkEvent('navigator/create') }>{ LocalizeText('group.createroom') }</Text> }
        </Column>
    );
};
