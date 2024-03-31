import { GroupState, GroupType } from '@nitro-rp/renderer';
import { GroupBadgePart } from './GroupBadgePart';

export interface IGroupData
{
    groupId: number;
    groupType: GroupType;
    groupName: string;
    groupDescription: string;
    groupHomeroomId: number;
    groupState: GroupState;
    groupCanMembersDecorate: boolean;
    groupColors: number[];
    groupBadgeParts: GroupBadgePart[];
}
