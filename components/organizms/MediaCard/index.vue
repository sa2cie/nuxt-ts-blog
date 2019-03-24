<!-- *************************************************************************
	TEMPLATE
************************************************************************* -->

<template>
  <v-card class="mediaCard">
    <v-img :src="image" aspect-ratio="2.75" />
    <div class="mediaCard__title">
      <div class="mediaCard__titlewrap">
        <span class="mediaCard__category teal--text">{{ category }}</span>
        <h3 class="mediaCard__heading">{{ title }}</h3>
        <p class="mediaCard__date grey--text">
          <v-icon class="mr-1" size="14px">access_time</v-icon>{{ datetime }}
        </p>
        <div class="mediaCard__text">{{ description }}</div>
      </div>
    </div>

    <div class="mediaCard__action">
      <nuxt-link to="/post">
        <v-btn depressed color="teal white--text" class="mediaCard__button">
          記事を読む
        </v-btn>
      </nuxt-link>
    </div>
  </v-card>
</template>

<!-- *************************************************************************
	SCRIPT
************************************************************************* -->

<script lang="ts" src="./index.ts" />

<!-- *************************************************************************
	STYLE
************************************************************************* -->

<style lang="scss" src="./index.scss"></style>
