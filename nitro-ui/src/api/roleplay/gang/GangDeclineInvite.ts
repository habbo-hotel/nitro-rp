import { GangDeclineInviteComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../../';

export function GangDeclineInvite(gangName: string): void
{
    SendMessageComposer(new GangDeclineInviteComposer(gangName));
}
