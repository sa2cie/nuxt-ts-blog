<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <div :class="['pageLoading', isLoadingFin ? '--hidden' : '']">
    <!-- <span :class="getClassHidden">{{ getClassHidden }}</span> -->
    <v-progress-linear
      v-if="valProgress !== null"
      v-model="valProgress"
      class="pageLoading__progress"
      color="teal"
    >
    </v-progress-linear>
    <v-progress-circular
      v-if="showCircle"
      :size="50"
      color="teal"
      class="pageLoading__circle"
      indeterminate
    ></v-progress-circular>
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
