<script setup lang="ts"></script>

<template>
  <div id="note"></div>

  <form display="flex" flex="col" w="250px">
    <input id="title" type="text" name="title" m="b-15px">
    <textarea id="note" name="note" cols="30" rows="10" m="b-15px"></textarea>
    <input type="button" value="ADD">
  </form>
</template>

<style lang="scss">
input[type="text"], textarea{
  border: 2px #000 solid;
}

input[type="button"]{
  padding: 5px 15px;
  width: 100px;

  cursor: pointer;
}
</style>
