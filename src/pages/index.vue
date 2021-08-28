<script setup lang="ts">
// eslint-disable-next-line import/named
import { reactive, ref } from 'vue'
import { db, auth } from '~/firebase'

const title = ref('')
const note = ref('')
const tab = ref<object[]>([])
const dataNote = reactive({
  init: 0,
})
const activeLogin = ref(false)
const choiceForm = ref('')

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(`${user.email} est connecter`)

    db.collection(`${user?.email}`).get().then((qs) => {
      dataNote.init = qs.size

      qs.forEach((doc) => {
        tab.value.push(doc.data())
      })

      tab.value.sort((a: object, b: object): number => {
        return b.index - a.index
      })
    })
  }
  else {
    console.log('Deconnecter')
  }
})

const updateActive = () => {
  return activeLogin.value = !activeLogin.value
}

const signOut = () => {
  auth.signOut()
    .then(() => {
      tab.value = []
    })
    .catch((error) => {
      console.log(error)
    })
}

const pushData = () => {
  const user = auth.currentUser

  if (user !== null) {
    db.collection(`${user.email}`).add({
      title: title.value,
      message: note.value,
      index: dataNote.init + 1,
    }).then((docRef) => {
      docRef.get().then((doc) => {
        if (doc.exists) {
          const newNote = doc.data()
          if (newNote !== undefined) tab.value.splice(0, 0, newNote)
        }
      })

      dataNote.init++
    })
      .catch((error) => {
        console.error('Error adding document: ', error)
      })
  }
}
</script>

<template>
  <header m="b-10">
    <button m="x-5" @click="updateActive(), choiceForm = 'register'">
      S'inscrire
    </button>

    <button @click="updateActive(), choiceForm = 'login'">
      Se connecter
    </button>

    <button m="x-5" @click="signOut">
      Se deconnecter
    </button>
  </header>

  <Login :active="activeLogin" :choice="choiceForm" @updateActive="updateActive" />

  <section>
    <div
      id="note"
      w="3/4"
      m="auto b-10"
      display="flex"
      flex="wrap"
      justify="start"
    >
      <Note v-for="item in tab" :key="item.index" :title="item.title" :note="item.message" />
    </div>

    <form display="flex" flex="col" w="550px" m="auto">
      <input
        id="title"
        v-model="title"
        type="text"
        name="title"
        m="b-15px"
        w="250px"
      >
      <textarea
        id="note"
        v-model="note"
        name="note"
        cols="30"
        rows="10"
        m="b-15px"
        w="550px"
      ></textarea>
      <input type="button" value="ADD" @click="pushData(), title = '', note = ''">
    </form>
  </section>
</template>

<style lang="scss">
input[type="button"]{
  padding: 5px 15px;
  width: 100px;

  cursor: pointer;
}
</style>
