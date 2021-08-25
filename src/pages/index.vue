<script setup lang="ts">
// eslint-disable-next-line import/named
import { ref } from 'vue'
import { db } from '~/firebase'

const title = ref('')
const note = ref('')

const pushData = () => {
  db.collection('note').add({
    title: title.value,
    message: note.value,
  }).then((docRef) => {
    console.log('Document written with ID: ', docRef.id)
  })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })
}

const exportData = () => {
  db.collection('note').get().then((qs) => {
    qs.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
  })
}
</script>

<template>
  <div id="note"></div>

  <form display="flex" flex="col" w="250px">
    <input id="title" v-model="title" type="text" name="title" m="b-15px">
    <textarea
      id="note"
      v-model="note"
      name="note"
      cols="30"
      rows="10"
      m="b-15px"
    ></textarea>
    <input type="button" value="ADD" @click="pushData(), title = '', note = ''">
  </form>

  <button bg="gray-600" text="light-900" p="x-5 y-2" m="t-5" @click="exportData">
    Verifier les données
  </button>
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
