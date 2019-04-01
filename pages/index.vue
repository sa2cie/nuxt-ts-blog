<!-- *************************************************************************
	TEMPLATE
************************************************************************* -->

<template>
  <div class="page">
    <box>
      <h2 class="page__heading elevation-3 blue-grey darken-4 white--text">
        Related Posts
      </h2>
      <div class="page__posts">
        <media-card-list :data="posts" />
        <div v-if="isLoadingPosts" class="page__posts__loading">
          <v-progress-circular
            :size="50"
            color="teal"
            indeterminate
          ></v-progress-circular>
        </div>
      </div>
      <div class="text-xs-center">
        <v-pagination
          v-model="currentPageCount"
          :length="getPageLength"
          :total-visible="7"
          color="teal"
          @input="handlePagenation"
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
