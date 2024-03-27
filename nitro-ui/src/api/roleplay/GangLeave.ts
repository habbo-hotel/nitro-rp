import { GangLeaveComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function GangLeave(): void
{
    SendMessageComposer(new GangLeaveComposer());
}
