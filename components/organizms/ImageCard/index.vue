<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <nuxt-link :to="{ name: 'post-id', params: { id } }">
    <v-card class="imageCard elevation-0">
      <div class="pt-3 pl-3 pr-3">
        <v-img
          class="white--text"
          height="180px"
          :src="image"
        ></v-img>
      </div>
      <v-card-title>
        <div>
          <span class="imageCard__category grey--text">{{ category }}</span>
          <span class="imageCard__title">{{ title }}</span>
        </div>
      </v-card-title>
    </v-card>
  </nuxt-link>
</template>

<!-- *************************************************************************
SCRIPT
************************************************************************* -->

<script lang="ts" src="./index.ts" />

<!-- *************************************************************************
STYLE
************************************************************************* -->

<style lang="scss" src="./index.scss" scoped></style>
