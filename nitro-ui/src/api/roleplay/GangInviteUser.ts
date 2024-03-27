import { GangInviteUserComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function GangInviteUser(gangName: string): void
{
    SendMessageComposer(new GangInviteUserComposer(gangName));
}
