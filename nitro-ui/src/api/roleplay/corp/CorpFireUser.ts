import { CorpFireUserComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function CorpFireUser(username: string): void
{
    SendMessageComposer(new CorpFireUserComposer(username));
}
