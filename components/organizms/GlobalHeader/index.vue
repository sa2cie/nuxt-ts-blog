<!-- *************************************************************************
	TEMPLATE
************************************************************************* -->

<template>
  <div class="header elevation-4">
    <v-toolbar dense class="white elevation-0">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
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
