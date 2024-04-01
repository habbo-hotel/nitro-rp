import { PoliceStunComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function PoliceStunUser(username: string): void
{
    SendMessageComposer(new PoliceStunComposer(username));
}
