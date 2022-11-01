import type { ImageSizes } from '../../types';
import { imageMixin } from './image.mixin';
declare type NAttrs = typeof imageMixin['nImgAttrs'] & {
    sizes?: string;
    srcset?: string;
};
declare const _default: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, {
    nAttrs: NAttrs;
    nSrc: string;
    nSizes: ImageSizes;
}, unknown>;
export default _default;
