import { utils, log } from '@bruu/utils';

log('random: ', utils.random(0, 10));
log('unique: ', utils.unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));