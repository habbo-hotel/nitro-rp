import { UserRoleplayStatsQueryComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function UserRoleplayStatsQuery(userID: number): void
{
    SendMessageComposer(new UserRoleplayStatsQueryComposer(userID));
}
