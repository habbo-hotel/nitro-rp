import { GangDisbandComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function GangDisband(): void
{
    SendMessageComposer(new GangDisbandComposer());
}
