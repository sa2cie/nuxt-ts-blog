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
          <v-icon class="mr-1" size="14px">access_time</v-icon>{{ date }}
        </p>
      </div>
    </div>
    <div class="postCard__description">{{ description }}</div>
    <div class="postCard__body" v-html="body"></div>
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
