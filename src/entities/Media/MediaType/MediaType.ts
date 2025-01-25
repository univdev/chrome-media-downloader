import { MEDIA_TYPE } from './MediaType.constant';

export type MediaType = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE];
