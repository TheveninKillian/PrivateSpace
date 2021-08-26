<script setup lang="ts">
// eslint-disable-next-line import/named
import { ref } from 'vue'
import { db } from '~/firebase'

const title = ref('')
const note = ref('')
const tab = ref<object[]>([])

db.collection('note').get().then((qs) => {
  qs.forEach((doc) => {
    tab.value.push(doc.data())
  })
})

const pushData = () => {
  db.collection('note').add({
    title: title.value,
    message: note.value,
  }).then((docRef) => {
    docRef.get().then((doc) => {
      if (doc.exists) {
        const newNote = doc.data()
        if (newNote !== undefined) tab.value.push(newNote)
      }
    })
  })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })
}
</script>

<template>
  <div id="note">
    <Note v-for="item in tab" :key="item.title" :title="item.title" :note="item.message" />
  </div>

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
