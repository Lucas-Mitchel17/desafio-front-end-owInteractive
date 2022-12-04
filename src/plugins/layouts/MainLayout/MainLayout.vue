<script setup>
import { TheHeader, TheFooter } from '@Layouts';
</script>

<template>
  <section class="layout">
    <TheHeader />

    <main class="main-content">
      <section class="content">
        <slot />
      </section>
      <TheFooter />
    </main>
  </section>
</template>

<style lang="sass">
.layout
  height: calc( 100% - $topnav )
  padding-top: $topnav

  & > .main-content
    display: flex
    flex-direction: column
    height: 100%

    & > .content
      flex: 1 0 auto

      & > .footer
        display: flex
        flex-shrink: 0
</style>
