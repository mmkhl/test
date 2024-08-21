<template>
  <v-dialog v-model="modalData.isShow" max-width="290">
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <h3>
          {{ modalData.title }}
        </h3>
        <h4>
          Новая
        </h4>
      </v-card-title>

      <v-row>
        <v-select class="p-0 m-0" :items="items" label="Дом"></v-select>
        <v-select class="p-0 m-0" :items="items" label="Квартира"></v-select>
        <v-text-field></v-text-field>
      </v-row>

      <v-row>
        <v-text-field></v-text-field>
        <v-text-field></v-text-field>
        <v-text-field></v-text-field>
        <v-text-field></v-text-field>
      </v-row>
      <v-row>
        <v-textarea
          counter
          label="Text"
          :rules="rules"
          :value="value"
        ></v-textarea>
      </v-row>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text>
          Отправить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: [
    'modalData', 
  ]
};
</script>

<style lang="scss" scoped>
</style>