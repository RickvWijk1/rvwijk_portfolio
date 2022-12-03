export { default as AboutApproachContainer } from '../..\\components\\about\\ApproachContainer.vue'
export { default as AboutCard } from '../..\\components\\about\\Card.vue'
export { default as AboutFilterSemesters } from '../..\\components\\about\\FilterSemesters.vue'
export { default as AboutSchoolContent } from '../..\\components\\about\\SchoolContent.vue'
export { default as AboutContDropdown } from '../..\\components\\about\\cont\\Dropdown.vue'
export { default as UIBorderFullHeight } from '../..\\components\\ui\\BorderFullHeight.vue'
export { default as UIBorderFullWidth } from '../..\\components\\ui\\BorderFullWidth.vue'
export { default as UITopNav } from '../..\\components\\ui\\TopNav.vue'
export { default as GraduationBanner } from '../..\\components\\graduation\\Banner.vue'
export { default as GraduationBottomNavBlue } from '../..\\components\\graduation\\BottomNavBlue.vue'
export { default as GraduationBottomNavWhite } from '../..\\components\\graduation\\BottomNavWhite.vue'
export { default as GraduationCardCont } from '../..\\components\\graduation\\CardCont.vue'
export { default as GraduationExpansionPanel } from '../..\\components\\graduation\\ExpansionPanel.vue'
export { default as GraduationGallery } from '../..\\components\\graduation\\Gallery.vue'
export { default as GraduationHero } from '../..\\components\\graduation\\Hero.vue'
export { default as ProjectsProducts } from '../..\\components\\projects\\Products.vue'
export { default as InterestsProducts } from '../..\\components\\interests\\Products.vue'
export { default as SemestersixGroupProjectProduct } from '../..\\components\\semestersix\\GroupProjectProduct.vue'
export { default as SemestersixIndProjectProduct } from '../..\\components\\semestersix\\IndProjectProduct.vue'
export { default as SemestersixInterProjectProduct } from '../..\\components\\semestersix\\InterProjectProduct.vue'
export { default as GraduationHeroContClouds } from '../..\\components\\graduation\\HeroCont\\Clouds.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
