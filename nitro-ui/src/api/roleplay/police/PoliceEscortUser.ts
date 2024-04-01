import { PoliceEscortComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function PoliceEscortUser(username: string): void
{
    SendMessageComposer(new PoliceEscortComposer(username));
}
