<template>
  <v-container class="pa-4 grey lighten-3" fluid color="red">
    <dialog
      :data="modalData"

    ></dialog>
    <header>
      <p style="font-size: 20px">Список заявок</p>
    </header>
    <v-card class="ma-4 rounded-m">
      <div class="title-card">
        <v-btn color="#50B053">Создать</v-btn>
      </div>
      <v-card-title class="d-flex align-center">
        <v-text-field
          v-model="search"
          class="mr-6 p-0"
          label="Поиск"
          append-icon="mdi-magnify"
        ></v-text-field>
        <v-select class="p-0 m-0" :items="items" label="Дом"></v-select>
      </v-card-title>
      <template>
        <v-data-table
          :headers="fields"
          no-data-text="Нет данных для отображения"
          :items="data"
          flat
          outlined
        >
          <template v-slot:item.number="{ item }">
            <v-btn
              rounded
              color="success"
              
            > 
              {{ item.number }}
            </v-btn>
          </template>
        
        </v-data-table>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import modal from '../components/modal.vue'
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("appeals");

export default {
  components: {
    modal
  },
  data() {
    return {
      modalData: {
        title: 'Создание заявки',
        isShow: false,
        item: {},
      },
      search: "",
      fields: [
        {
          text: "№",
          align: "start",
          color: "#50B053",
          class: "",
          sortable: true,
          value: "number",
        },
        { text: "Создана", value: "created_at", sortable: true },
        { text: "Адрес", value: "premise.full_address", sortable: false },
        { text: "Заявитель", value: "applicant.username", sortable: false },
        { text: "Описание", value: "description", sortable: false },
        { text: "Срок", value: "due_date", sortable: false },
        { text: "Статус", value: "status.name", sortable: false },
      ],
      items: [],
    };
  },
  computed:{
    ...mapState([
      'data',
      'paginations'
    ]),

  },
  async mounted(){
    await this.getFilterHomes()



  },
  methods: {
    ...mapActions([
      'getData',
      'getItem',
      'addItem',
      'editItem',
      'getFilterHomes'
    ]),
    ...mapMutations([]),
  }
};
</script>

<style lang="sass">
html
  overflow-y: auto !important

.v-application
  background-color: #eeeeee !important


header
  padding: 30px
.v-card
  border-radius: 10px !important
.title-card
  display: flex
  padding: 10px
  justify-content: flex-end
button
  color: #ffffff !important
</style>