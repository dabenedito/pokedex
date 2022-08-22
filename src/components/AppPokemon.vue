<template>
  <app-loading :handle="isLoading" />

  <div v-if="!isLoading" class="flex content-start items-center p-4">
    <div class="col-start-1">
      <img class="w-24" v-if="pokemon.imgUrl" :src="pokemon.imgUrl" :alt="pokemon.name">
    </div>
    <div class="content-start">
      <div class="text-2xl">{{ pokemon.name }}</div>
      <div>{{ pokemon.types }}</div>
    </div>
  </div>
</template>

<script>
import { api } from "../services/config.js";
import AppLoading from "../shared/AppLoading.vue";

export default {
  name: "AppPokemon",
  components: { AppLoading },

  props: {
    pokemonObject: {
      type: Object,
      default: {}
    }
  },

  methods: {
    async getPokemonData(url) {
      this.isLoading = true;

      await api.get(url).then(({ data }) => {
        console.log(data);
        this.pokemon.name = data.name;
        this.pokemon.imgUrl = data.sprites.front_default;
        this.pokemon.types = data.types.map(val => val.type.name).join(' | ');
      });

      this.isLoading = false;
    }
  },

  data() {
    return {
      isLoading: {
        type: Boolean,
        default: true,
      },

      pokemon: {
        name: String,
        imgUrl: String,
        types: String,
      }
    };
  },

  mounted() {
    this.getPokemonData(this.pokemonObject.url);
  }
};
</script>

<style scoped>

</style>