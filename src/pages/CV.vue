<template>
  <div class="q-pa-md">
      
    <q-card class="q-pa-md" style="width: 80%;margin: 0 auto;">
      <div class="q-pa-md text-center">
        <strong>Curriculum Vitae</strong>
      </div>
      <div class="row">
        <div class="col-6 text-right q-px-xl"><strong>Name: </strong>{{ cv.name }}</div>
        <div class="col-6"><strong>Fathe Name: </strong>{{ cv.fName }}</div>
      </div>
      <div class="row">
        <div class="col-6 text-right q-px-xl"><strong>Phone: </strong>{{ cv.phone }}</div>
        <div class="col-6"><strong>Email: </strong>{{ cv.email }}</div>
      </div>
      <div class="row">
        <div class="col-6 text-right q-px-xl"><strong>Address: </strong>{{ cv.address }}</div>
        <div class="col-6"><strong>District: </strong>{{ cv.distric}}</div>
      </div>
      <div class="row">
        <div class="col-6 text-right q-px-xl"><strong>Date of Birth: </strong>{{ cv.dateOfBirth }}</div>
        <div class="col-6"><strong>Passing Year: </strong>{{ cv.passingYear }}</div>
      </div>
      <div class="row">
        <div class="col-6 text-right q-px-xl"><strong>Institute: </strong>{{ cv.institute }}</div>
        <div class="col-6"><strong>Subject: </strong>{{ cv.subject }}</div>//mashthes
      </div>
    </q-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CV",
  computed: {
    ...mapGetters("CV", ["cvList"]),
    cv() { //computed poperty
      return this.cvList.find((cv) => cv.id === this.$route.params.id);
    },
  },
};
</script>

<style>
</style>