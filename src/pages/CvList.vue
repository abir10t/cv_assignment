<template>
  <q-page>
    <div class="q-pa-sm bg-blue text-white text-center text-bold">CV List</div>
    <div>
      <q-list bordered separator>
        <q-item clickable v-ripple v-for="(cv, index) in cvList" :key="index" class="row">
          <q-item-section class="column">
            <q-item-label> {{cv.name}} </q-item-label>
          </q-item-section>
          <q-item-section class="col-auto">
            <router-link class="q-mr-md" :to="`/cv/${cv.id}`">View</router-link>
          </q-item-section>
          <q-item-section class="col-auto">
            <q-btn
                round
                color="red"
                dense
                icon="delete"
                @click="DELETE_CV(cv.id)"
              />
              //delete e je id ditesi seta mutataion e jaytese
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CVList",
  computed: {
    ...mapGetters("CV", ["cvList"]),
  },
  methods: {
    ...mapMutations("CV", ["DELETE_CV"]),
  },
};
</script>