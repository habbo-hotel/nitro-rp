import { SendMessageComposer } from '..';
import { AttackUserComposer } from '../../messages/outgoing/AttackUserComposer';

export function AttackUser(userId: number): void
{
    SendMessageComposer(new AttackUserComposer(userId));
}
