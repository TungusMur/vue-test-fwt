/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.svg' {
  import Vue, { VueElementConstructor, Component } from 'vue';
  const content: SVGAttributes;
  export default content;
}
