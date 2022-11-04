<template>
  <TheHeaderVue v-if="showHeader">
    <template v-slot:title>
      <h1>Teste cabelçhao pelo slot</h1>
    </template>
    <template v-slot:description>
      <p>Descrição do slot</p>
    </template>
      default sem nada mesmo
  </TheHeaderVue>
  <div v-show="showName">
    Nome: {{ name }}
  </div>
  <div v-if="accessLevel === 'admin'">Usuario Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Usuario Marketing</div>
  <div v-else>Usuario normal</div>
  <TwoWayVue/>
  <TheEventosVue/>
  <TheComputedVue/>
  <TheObserverVue/>
  <BaseCardVue/>
  <div class="card">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad dolores asperiores atque eum modi provident magni! Consequatur ad iste id provident cupiditate! Harum nulla, aliquid obcaecati id voluptatum tempore.
  </div>
  <br><br>
  <BaseAlertVue varStyle='alert'/>
</template>

<script>
import TheHeaderVue from './components/TheHeader.vue';
import TwoWayVue from './components/TwoWay.vue';
import TheEventosVue from './components/TheEventos.vue';
import TheComputedVue from './components/TheComputed.vue';
import TheObserverVue from './components/TheObserver.vue';
import BaseCardVue from './components/BaseCard.vue';
import BaseAlertVue from './components/BaseAlert.vue';

export default {
  name: 'App',
  components: {
    TheHeaderVue,
    TwoWayVue,
    TheEventosVue,
    TheComputedVue,
    TheObserverVue,
    BaseCardVue,
    BaseAlertVue,
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
