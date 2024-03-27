import { GroupInformationComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function GetGroupInformation(groupId: number): void
{
    SendMessageComposer(new GroupInformationComposer(groupId, true));
}
