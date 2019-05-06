import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    compareStaffNames(a: string, b: string): number
  }
}
