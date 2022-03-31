<template>
  <div>
    <div>
      <textarea v-model="input" placeholder=""></textarea>
      <button v-on:click="exec">実行</button>
    </div>
    <div>
      <code>
        {{ output }}
      </code>
    </div>
  </div>
</template>

<script>
import { runCode } from "../logic/RunCode.ts";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Repl",
  props: {
    msg: String,
  },
  data() {
    return {
      input: "",
      output: "",
    };
  },
  methods: {
    exec: function () {
      const result = runCode(this.$data.input);
      this.$data.output = result;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.repl {
  background: magenta;
}
</style>
