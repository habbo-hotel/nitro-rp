import { UserProfileComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function GetUserProfile(userId: number): void
{
    SendMessageComposer(new UserProfileComposer(userId));
}
