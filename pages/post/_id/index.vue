<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <div class="page">
    <box>
      <h2 class="page__heading elevation-3 blue-grey darken-4 white--text">
        {{ post.title }}
      </h2>
      <section>
        <post-card
          :id="post.id"
          :title="post.title"
          :category="post.category"
          :date="post.date"
          :description="post.description"
          :body="post.body"
          :image="post.image"
          :thumb="post.thumb"
        />
      </section>
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
