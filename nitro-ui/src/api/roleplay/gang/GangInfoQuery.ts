import { GangInfoQueryComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function GangInfoQuery(gangID: number): void
{
    SendMessageComposer(new GangInfoQueryComposer(gangID));
}
