import { PoliceArrestComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function PoliceArrestUser(username: string): void
{
    SendMessageComposer(new PoliceArrestComposer(username));
}
