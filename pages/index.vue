<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <div class="page">
    <box>
      <h2 class="page__heading elevation-3 blue-grey darken-4 white--text">
        新着記事<span class="page__subheading teal--text">Latest Posts</span>
      </h2>
      <div class="page__posts">
        <media-card-list :data="sharedState.latestPosts.posts" />
        <div v-if="sharedState.latestPosts.loading" class="page__posts__loading">
          <v-progress-circular
            :size="50"
            color="teal"
            indeterminate
          ></v-progress-circular>
        </div>
      </div>
      <div class="text-xs-center">
        <v-pagination
          v-model="sharedState.pagination.current"
          :length="getPageLength"
          :total-visible="7"
          color="teal"
          @input="handlePagination"
        ></v-pagination>
      </div>
    </box>
  </div>
</template>

<!-- *************************************************************************
SCRIPT
************************************************************************* -->

<script lang="ts" src="./index.ts" />

<!-- *************************************************************************
STYLE
************************************************************************* -->

<style lang="scss" src="./index.scss" scoped></style>
