<template>
  <TheHeaderVue v-if="showHeader"/>
  <div v-show="showName">
    Nome: {{ name }}
  </div>
  <div v-if="accessLevel === 'admin'">Usuario Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Usuario Marketing</div>
  <div v-else>Usuario normal</div>
  <TwoWayVue/>
  <TheEventosVue/>
  <TheComputedVue/>
</template>

<script>
import TheHeaderVue from './components/TheHeader.vue';
import TwoWayVue from './components/TwoWay.vue';
import TheEventosVue from './components/TheEventos.vue';
import TheComputedVue from './components/TheComputed.vue';


export default {
  name: 'App',
  components: {
    TheHeaderVue,
    TwoWayVue,
    TheEventosVue,
    TheComputedVue,
  },
  data () {
    return {
      showHeader :true,
      name: 'Luquete',
      showName: true,
      accessLevel: 'marketing',
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
