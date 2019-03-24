<!-- *************************************************************************
	TEMPLATE
************************************************************************* -->

<template>
  <section :class="['box', getClassBorderTop, getClassBorderBottom]">
    <slot />
  </section>
</template>

<!-- *************************************************************************
	SCRIPT
************************************************************************* -->

<script lang="ts">
// NPM
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Box extends Vue {
  @Prop({ type: Boolean, default: false }) readonly topBorderline!: boolean
  @Prop({ type: Boolean, default: false }) readonly bottomBorderline!: boolean

  public get getClassBorderTop(): string {
    return this.topBorderline ? '--hasBorderTop' : ''
  }

  public get getClassBorderBottom(): string {
    return this.bottomBorderline ? '--hasBorderBottom' : ''
  }
}
</script>
<!-- *************************************************************************
	STYLE
************************************************************************* -->

<style lang="scss" scoped>
.box {
  margin-bottom: 24px;

  &.--hasBorderTop {
    padding-top: 24px;
    border-top: 1px solid #000;
  }

  &.--hasBorderBottom {
    padding-bottom: 24px;
    border-bottom: 1px solid #000;
  }
}
</style>
