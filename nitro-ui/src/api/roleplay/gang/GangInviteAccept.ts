import { GangInviteAcceptComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function GangInviteAccept(gangName: string): void
{
    SendMessageComposer(new GangInviteAcceptComposer(gangName));
}
