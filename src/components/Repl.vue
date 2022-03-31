<template>
  <div>
    <div>
      <textarea v-model="input" id="textInput"></textarea>
      <button v-on:click="exec">実行</button>
    </div>
    <div>
      <h4>出力結果</h4>
      <div id="output">
        <code>
          <pre>
          {{ output }}
          </pre>
        </code>
      </div>
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
      output: "",
      input: `const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);
const map2 = array1.map(x => x * x);
const map3 = map1.concat(map2);

const result = {map1, map2, map3}

return result;
      `,
    };
  },
  methods: {
    exec: function () {
      const result = runCode(this.$data.input);
      this.$data.output = JSON.stringify(result, null, 2);
      console.log(this.$data.output);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#output {
  background: #191919;
  color: #fff;
  font-size: 1.25rem;
}
#textInput {
  width: 80vw;
  height: 30vw;
}
</style>
