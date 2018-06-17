
<template>
  <container class="conteneur mt-5 " >
  
    <PageRecherche></PageRecherche>
   </container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Container } from 'mdbvue';
import PageRecherche from '@/views/PageRecherche.vue';

@Component({
  components: {
    Container,
    PageRecherche,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.box > .button {
  margin-right: 8px;
}
.conteneur {
  border: 1px solid black;
}
</style>
