<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <div class="sidebar">
    <section class="sidebar__widget elevation-3">
      <h3 class="sidebar__widget__heading">Related Posts</h3>
      <div class="sidebar__widget__content">
        <image-card-list
          v-show="!sharedState.relatedEntries.loading"
          :data="sharedState.relatedEntries.entries"
        />
      </div>
    </section>
    <!-- <section class="sidebar__widget elevation-1">
      <v-card color="blue-grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div>
            <div class="headline">Unlimited music now</div>
            <span>
              Listen to your favorite artists and
              <br />albums whenever and wherever, online and offline.
            </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat dark>Listen now</v-btn>
        </v-card-actions>
      </v-card>
    </section> -->
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
