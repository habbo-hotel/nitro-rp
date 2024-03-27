import { GroupJoinComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export const TryJoinGroup = (groupId: number) => SendMessageComposer(new GroupJoinComposer(groupId));
