<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <div class="page">
    <box>
      <h2 class="page__heading elevation-3 blue-grey darken-4 white--text">
        {{ sharedState.data.title }}
      </h2>
      <section>
        <post-card
          :id="sharedState.data.id"
          :title="sharedState.data.title"
          :category="sharedState.data.category"
          :date="sharedState.data.date"
          :description="sharedState.data.description"
          :body="sharedState.data.body"
          :image="sharedState.data.image"
          :thumb="sharedState.data.thumb"
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
