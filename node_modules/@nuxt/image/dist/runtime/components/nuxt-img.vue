<template>
  <img :key="nSrc" :src="nSrc" v-bind="nAttrs" v-on="$listeners">
</template>

<script>
import { imageMixin } from "./image.mixin";
import { parseSize } from "~image";
const defineComponent = (opts) => opts;
export default defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],
  head() {
    if (this.preload === true) {
      return {
        link: [
          {
            rel: "preload",
            as: "image",
            href: this.nSrc
          }
        ]
      };
    }
  },
  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;
      if (this.sizes) {
        const { sizes, srcset } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }
      return attrs;
    },
    nSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },
    nSizes() {
      return this.$img.getSizes(this.src, {
        ...this.nOptions,
        sizes: this.sizes,
        modifiers: {
          ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    }
  },
  created() {
    if (process.server && process.static) {
      if (this.sizes) {
        this.nSizes;
      }
    }
  }
});
</script>
