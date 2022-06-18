<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h2>{{mensagem}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorldService from "../services/helloWorldService"

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      mensagem: ""
    };
  },
  methods: {
    async obterMensagem(){
      try{
        await HelloWorldService.logarUmaMensagem().then((data) => {
          this.mensagem = data.mensagem
        })
      } catch (erro) {
        console.error(erro)
      }
    }
  },
  async created() {
    this.obterMensagem()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
