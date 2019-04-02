<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <container>
    <!-- Layout - content -->
    <section class="l-content">
      <!-- Layout - main -->
      <main class="l-main">
        <nuxt></nuxt>
      </main>

      <!-- Layout - sidebar -->
      <aside class="l-sidebar">
        <global-sidebar />
      </aside>
    </section>
  </container>
</template>

<!-- *************************************************************************
SCRIPT
************************************************************************* -->

<script lang="ts">
// NPM
import { Component, Vue } from 'nuxt-property-decorator';

// COMPONENT
const Container = () => import('@/layouts/container.vue');
const GlobalSidebar = () => import('@/components/organizms/GlobalSidebar');

@Component({
  components: {
    Container,
    GlobalSidebar
  }
})
export default class Default extends Vue {}
</script>

<!-- *************************************************************************
STYLE
************************************************************************* -->

<style lang="scss" scoped>
.l-content {
  display: flex;
}

.l-sidebar {
  width: 354px;
  margin-bottom: 24px;
  padding: 0 16px 8px 8px;
}

.l-main {
  flex: 1;
  word-wrap: break-word;
  min-width: 0;
  margin-bottom: 24px;
  padding: 0 16px 8px 8px;
}

.postCardList {
  padding-bottom: 0;
  &__item {
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
