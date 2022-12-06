<script setup></script>

<template>
  <footer class="footer">
    <AppText class="footer-text"> MktPlace </AppText>
  </footer>
</template>

<style lang="sass">
.footer
  align-items: center
  background-color: $footer
  bottom: 0
  display: flex
  justify-content: center
  margin-top: 60px
  padding: 30px 0
  position: relative
  width: 100%

  & > .footer-text
    color: $footerText
    font-size: 28px
    font-weight: 900
</style>
