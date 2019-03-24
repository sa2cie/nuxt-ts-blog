<!-- *************************************************************************
	TEMPLATE
************************************************************************* -->

<template>
  <!-- Layout - wrapper -->
  <div class="l-wrapper">
    <!-- Layout - header -->
    <header class="l-header">
      <global-header />
    </header>

    <!-- Layout - container -->
    <div class="l-container">
      <!-- Layout - breadcrumb -->
      <div class="l-breadcrumb">
        <global-breadcrumb />
      </div>

      <!-- Insert Contents -->
      <nuxt v-if="!$slots.default" />
      <slot />
    </div>

    <!-- Layout - footer -->
    <footer class="l-footer">
      <global-footer />
    </footer>

    <!-- Layout - page-loading -->
    <div class="l-page-loading">
      <global-page-loading
        :is-loading="isPageLoading"
        :show-circle="true"
        :val-progress="100"
      />
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
************************************************************************* -->

<script lang="ts">
// NPM
import { Component, Vue } from 'nuxt-property-decorator'

// COMPONENT
const GlobalHeader = () => import('@/components/organizms/GlobalHeader')
const GlobalBreadcrumb = () => import('@/components/organizms/GlobalBreadcrumb')
const GlobalFooter = () => import('@/components/organizms/GlobalFooter')
const GlobalPageLoading = () => import('@/components/organizms/GlobalPageLoading')

@Component({
  components: {
    GlobalHeader,
    GlobalBreadcrumb,
    GlobalFooter,
    GlobalPageLoading
  }
})
export default class Container extends Vue {
  public isPageLoading: boolean = false;
}
</script>

<!-- *************************************************************************
	STYLE
************************************************************************* -->

<style lang="scss" scoped>
.l-wrapper {
  position: relative;
  padding-top: 64px;
}

.l-header {
  widows: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &.--hidden {
    top: -64px;
  }
}

.l-container {
  max-width: 1170px;
  margin: 0 auto;
}

.l-footer {
  display: block;
}
</style>
