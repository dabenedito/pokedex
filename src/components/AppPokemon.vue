<template>
  <app-loading :handle="isLoading" />

  <div v-if="!isLoading" class="flex content-start items-center p-4">
    <div class="avatar" v-if="pokemon.imgUrl">
      <div class="w-24 mask mask-squircle">
        <img :src="pokemon.imgUrl" :alt="pokemon.name" />
      </div>
    </div>

    <div class="content-start">
      <div class="text-2xl">{{ pokemon.name }}</div>
      <div v-html="pokemon.types"></div>
    </div>
  </div>
</template>

<script>
import { api } from '../services/config.js';
import AppLoading from '../shared/AppLoading.vue';

export default {
  name: 'AppPokemon',
  components: { AppLoading },

  props: {
    pokemonObject: {
      type: Object,
      default: {},
    },
  },

  methods: {
    async getPokemonData(url) {
      this.isLoading = true;

      await api.get(url)
          .then(({ data }) => {
            this.pokemon.name = data.name;
            this.pokemon.imgUrl = data.sprites.front_default;
            this.pokemon.types = data.types
                .map(val => val.type.name)
                .reduce((acc, type) => {
                  acc += `<div class="badge ${ type } text-gray-900">${ type }</div> `;

                  return acc;
                }, '');
          });

      this.isLoading = false;
    },
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
      },
    };
  },

  mounted() {
    this.getPokemonData(this.pokemonObject.url);
  },
};
</script>

<style>
.grass {
  background-color: #9bcc50;
}

.fairy {
  background-color: #fdb9e9;
}

.poison {
  background-color: #b97fc9;
}

.dark {
  background-color: #707070;
}

.psychic {
  background-color: #f366b9;
}

.ghost {
  background-color: #7b62a3;
}

.ice {
  background-color: #51c4e7;
}

.normal {
  background-color: #a4acaf;
}

.dragon {
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
}

.flying {
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}

.fire {
  background: #fd7d24;
}

.water {
  background: #4592c4;
}

.ground {
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
}

.electric {
  background: #eed535;
}

.bug {
  background: #729f3f;
}

.fighting {
  background: #d56723;
}

.rock {
  background: #a38c21;
}

.steel {
  background: #9eb7b8;
}
</style>