<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script lang="ts">
import './button.css';
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'my-button',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value: string) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },
  emits: ['click'],
})
export default class ButtonClass extends Vue {
  label!: string;
  primary!: boolean;
  size!: string;
  backgroundColor!: string;

  get classes(): Record<string, boolean>
  {
    return {
      'storybook-button': true,
      'storybook-button--primary': this.primary,
      'storybook-button--secondary': !this.primary,
      [`storybook-button--${this.size || 'medium'}`]: true,
    }
  }

  get style(): Record<string, any> {
    return {
      'backgroundColor': this.backgroundColor
    }
  }

  onClick() {
    this.$emit('click');
  }
}
</script>
