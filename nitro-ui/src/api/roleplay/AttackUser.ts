import { AttackUserComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function AttackUser(username: string): void
{
    SendMessageComposer(new AttackUserComposer(username));
}
