<script setup lang="ts">
definePageMeta({
  name: 'todo',
})

const todoStore = useTodoStore()
const userStore = useUserStore()

onMounted(async () => {
  await todoStore.fetchTodoList()
})

function navigateToTodo() {
  const userId = userStore.selectedUserId
  navigateTo({
    name: 'todoDetail',
    params: {
      id: userId,
    },
  })
}

// GÖREV 2
// elindeki userId lere göre bu kullanıcıların resimlerini ve isimlerini göstermelisin https://randomuser.me/
// bunun için Todo tipini değiştirmen gerekecek yeni tipte nasıl bir yapı izleyeceğin çok önemli.
// opsiyonel: zorluk istiyorsan fakerapi kullanarak kullanıcı bilgilerini detaylandırabilirsin ama bu yola girersen todonun eklenme tarihini görmek ve bunu filtreleyebilmek isterim

// yapılan görevler, yapılmayan görevler ve tümünü göster filtresi olmalı
// aynı kullanıcının birden fazla taskı olabiliyor, kullanıcıya göre filtrelenebilmeli. nuxtui dan selectmenu kullanarak bu filtrelemeyi yapmalısın ve filtrelerken userların resimlerini de görmek istiyorum
</script>

<template>
  <NuxtLayout name="default">
    <div class="w-full h-full flex flex-col lg:flex-row justify-between p-4 gap-4">
      <div class="w-full lg:h-full h-2/6 flex flex-col lg:justify-center justify-between items-center gap-3 myBorder p-4">
        <UserProfileImage />
        <UserSearchProfile />
        <ButtonSmall label="Görevlere git" @click="navigateToTodo" />
      </div>

      <div class="myBorder lg:w-2/5 flex flex-col overflow-auto">
        <div class="flex justify-center flex-row items-center gap-3" />
        <ListTodoList class="w-full h-full myBorder p-4 overflow-auto" />
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.myBorder {
  @apply border rounded dark:border-gray-700 border-gray-300
}
</style>
