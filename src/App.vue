<template>
  <base-container class="sm:p-8">
    <default-box v-for="pokemon in pokemons" :key="pokemon.name">
      <app-pokemon :pokemonObject="pokemon" />
    </default-box>
  </base-container>

  <app-paginate :next="this.nextPage" :previous="this.previousPage" />
</template>

<script>
import BaseContainer from "./shared/BaseContainer.vue";
import DefaultBox from "./shared/DefaultBox.vue";
import AppHeading from "./shared/AppHeading.vue";
import AppButton from "./shared/AppButton.vue";
import Pokemons from "./services/pokemons";
import AppPaginate from "./shared/AppPaginate.vue";
import AppPokemon from "./components/AppPokemon.vue";

export default {
  components: { AppPokemon, AppPaginate, AppButton, AppHeading, DefaultBox, BaseContainer },

  data() {
    return {
      pokemons: {
        type: Array,
        default: []
      },
      limit: {
        type: Number,
        default: 21
      },
      offset: 0
    };
  },

  mounted() {
    this.fetchList();
  },

  methods: {
    nextPage() {
      if(this.offset + 21 >= 1154) {
        this.offset = 1154 - 21;
      } else {
        this.offset += 21;
      }

      this.fetchList(this.offset);
    },

    previousPage() {
      if(this.offset - 21 <= 0) {
        this.offset = 0;
      } else {
        this.offset -= 21;
      }

      this.fetchList(this.offset);
    },

    fetchList(offset) {
      Pokemons.listar(offset).then(res => {
        this.pokemons = res?.data.results;
      });
    }
  }
};
</script>

<style scoped>
</style>
