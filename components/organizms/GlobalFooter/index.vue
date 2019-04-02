<!-- *************************************************************************
TEMPLATE
************************************************************************* -->

<template>
  <div class="footer">
    <v-footer dark height="auto">
      <v-card flat tile width="100%" class="teal white--text text-xs-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;{{ copyright.year }} — <strong>{{ copyright.name }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
