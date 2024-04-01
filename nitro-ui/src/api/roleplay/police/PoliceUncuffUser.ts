import { PoliceUncuffComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function PoliceUncuffUser(username: string): void
{
    SendMessageComposer(new PoliceUncuffComposer(username));
}
