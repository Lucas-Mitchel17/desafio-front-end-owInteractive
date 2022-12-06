<script setup>
import { computed } from 'vue';
import { styleFromStateHelper } from '@Helpers';
import CloseIcon from '@Icons/close.svg?component';

const emit = defineEmits(['update:modelValue', 'onCloseModal']);

const props = defineProps({
  backOption: Boolean,

  closable: Boolean,

  title: String,

  modelValue: {
    default: false,
    required: true,
    type: Boolean,
  },
});

const { activeClass } = styleFromStateHelper();

const model = computed({
  get() {
    return props.modelValue;
  },

  set(newValue) {
    return emit('update:modelValue', newValue);
  },
});

const dynamicClasses = computed(() => {
  return [activeClass(model.value)];
});
</script>

<template>
  <Teleport to="#modal">
    <aside
      v-show="model"
      :class="['modal', ...dynamicClasses]"
    >
      <section
        class="layer"
        @click="emit('onCloseModal')"
      />

      <section class="content">
        <CloseIcon
          class="close"
          @click="emit('onCloseModal')"
        />

        <header v-if="model && title">
          <section class="icon">
            <slot
              name="icon"
              v-if="$slots.icon"
            />
          </section>

          <section class="title">
            <AppText tag="h3">
              {{ title }}
            </AppText>
          </section>
        </header>

        <main class="main">
          <slot v-if="$slots.default" />
        </main>
      </section>
    </aside>
  </Teleport>
</template>

<style lang="sass" scoped>
.modal .layer
  backdrop-filter: blur(1.75px)
  background: $layerBack
  bottom: 0
  left: 0
  opacity: 0
  position: fixed
  right: 0
  top: 0
  transition: opacity .2s ease-in-out
  z-index: 999

.modal .content
  background: $white
  border-radius: 2px
  bottom: 0
  left: 0
  margin: auto
  max-height: 270px
  max-width: 460px
  position: absolute
  right: 0
  transition: opacity .2s ease-in-out
  opacity: 0
  top: 0
  z-index: 9999

.modal.is-active .content,
.modal.is-active .layer
  opacity: 1

  & > .close
    fill: $grey
    cursor: pointer
    display: flex
    margin: 10px 10px auto auto

  & > header
    margin: 30px auto 20px

  & > header > .icon
    display: flex
    margin: auto
    width: 100px
    height: 90px

  & > header > .title
    color: $darkGrey
    text-align: center
    margin: 20px

    & > h3
      font-size: $modalTitle
      letter-spacing: .15px
      margin: 0
</style>
