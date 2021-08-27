<script lang="ts" setup>
const props = defineProps({
  active: Boolean,
  choice: String,
})

const emit = defineEmits(['updateActive'])
</script>

<template>
  <div v-if="props.active" pos="absolute top-0 left-0" w="full" h="full">
    <div class="overlay" @click="emit('updateActive')"></div>

    <div class="form-login">
      <div v-if="choice === 'signIn'">
        <h3 text="center" m="y-5">
          S'inscrire
        </h3>

        <form>
          <label for="email">Email</label><input id="email" type="email" name="email"><br><br>
          <label for="password">Mot de passe</label><input id="password" type="password" name="password">
        </form>
      </div>

      <div v-if="choice === 'login'">
        <h3 text="center" m="y-5">
          Se connecter
        </h3>

        <form>
          <label for="email">Email</label><input id="email" type="email" name="email"><br><br>
          <label for="password">Mot de passe</label><input id="password" type="password" name="password">
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .overlay{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.507);
  }

  .form-login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 25%;
    width: 25%;

    background-color: #FFF;
    box-shadow: 1px 1px 5px #000;

    label{
      margin-right: 10px;
    }
  }
</style>
