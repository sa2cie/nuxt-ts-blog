<!-- *************************************************************************
	TEMPLATE
************************************************************************* -->

<template>
  <article class="postCard elevation-3">
    <v-img :src="image" aspect-ratio="2.75" />

    <div class="postCard__title">
      <div class="postCard__titlewrap">
        <span class="postCard__category teal--text">{{ category }}</span>
        <h1 class="postCard__heading">{{ title }}</h1>
        <p class="postCard__date grey--text">
          <v-icon class="mr-1" size="14px">access_time</v-icon>{{ datetime }}
        </p>
      </div>
    </div>
    <div class="postCard__description">{{ description }}</div>
    <div class="postCard__body" v-html="article"></div>

    <!-- <div class="mediaCard__action">
      <nuxt-link to="/post">
        <v-btn depressed color="teal white--text" class="mediaCard__button">
          記事を読む
        </v-btn>
      </nuxt-link>
    </div> -->
  </article>
</template>

<!-- *************************************************************************
	SCRIPT
************************************************************************* -->

<script lang="ts" src="./index.ts" />

<!-- *************************************************************************
	STYLE
************************************************************************* -->

<style lang="scss" src="./index.scss"></style>
