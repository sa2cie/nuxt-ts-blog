<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <!-- Layout - wrapper -->
  <div class="l-wrapper">
    <!-- Layout - header -->
    <header class="l-header">
      <global-header :click-menu="handleClickMenu"/>
    </header>

    <div class="l-navigation">
      <div v-show="drawer" class="v-overlay v-overlay--active"></div>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        dark
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider light></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="$route.path === item.path ? null : item.path"
          >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>

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
import { Component, Vue } from 'nuxt-property-decorator';

// PRODUCT
import { CONFIG, PAGE } from '@/assets/js/constants';

// COMPONENT
const GlobalHeader = () => import('@/components/organizms/GlobalHeader');
const GlobalBreadcrumb = () => import('@/components/organizms/GlobalBreadcrumb');
const GlobalFooter = () => import('@/components/organizms/GlobalFooter');
const GlobalPageLoading = () => import('@/components/organizms/GlobalPageLoading');

// CONSTANTS
const { SITE_NAME, SITE_AUTHOR } = CONFIG;
const {
  TOP_TITLE,
  TOP_PATH,
  PROFILE_TITLE,
  PROFILE_PATH
} = PAGE;

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
  public title: string = SITE_NAME;
  drawer = false;
  items = [
    { title: TOP_TITLE, path: TOP_PATH, icon: 'dashboard' },
    { title: PROFILE_TITLE, path: PROFILE_PATH, icon: 'question_answer' }
  ];
  mini = false;
  right = null;

  handleClickMenu () {
    this.drawer = !this.drawer;
  }
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
  z-index: 4;

  &.--hidden {
    top: -64px;
  }
}

.l-navigation {
  z-index: 2000;

  .v-navigation-drawer {
    z-index: 3000;
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
