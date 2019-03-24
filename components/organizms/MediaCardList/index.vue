<!-- *************************************************************************
	TEMPLATE
************************************************************************* -->

<template>
  <ul class="mediaCardList">
    <li v-for="(media, index) in data" :key="index" class="mediaCardList__item">
      <media-card
        :id="media.id"
        :title="media.title"
        :category="media.category[0]"
        :datetime="media.datetime"
        :description="media.description"
        :image="media.image"
        :thumb="media.thumb"
      />
    </li>
  </ul>
</template>

<!-- *************************************************************************
	SCRIPT
************************************************************************* -->

<script lang="ts" src="./index.ts" />

<!-- *************************************************************************
	STYLE
************************************************************************* -->

<style lang="scss" src="./index.scss" scoped></style>
