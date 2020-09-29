<template>
  <q-page>
    <div class="q-pa-sm bg-blue text-white text-center text-bold">
      Create CV
    </div>
    <div class="q-pa-md">
      <q-card outlined>
        <q-form @submit="onSubmit" ref="cv-form" class="q-gutter-md">
          <div class="row">
            <q-input
              outlined
              v-model="cv.name"
              class="col-5 q-ma-sm"
              dense
              label="Name"
            />
            <q-input
              outlined
              v-model="cv.fName"
              class="col-5 q-ma-sm"
              dense
              label="Father Name"
            />
          </div>
          <div class="row">
            <!-- <q-input
              outlined
              v-model="cv.dateOfBirth"
              class="col-5 q-ma-sm"
              dense
              label="Date of birth"
            /> -->
            <q-input
              filled
              v-model="cv.dateOfBirth"
              mask="date"
              class="col-5 q-ma-sm"
              dense
              outlined
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="cv.dateOfBirth" outlined>
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-select
              outlined
              v-model="cv.gender"
              class="col-5 q-ma-sm"
              :options="options"
              dense
              label="Gender"
            />
          </div>
          <div class="row">
            <q-input
              outlined
              v-model="cv.phone"
              class="col-5 q-ma-sm"
              dense
              label="Phone"
            />
            <q-input
              outlined
              v-model="cv.email"
              class="col-5 q-ma-sm"
              dense
              label="Email"
            />
          </div>
          <div class="row">
            <q-input
              outlined
              v-model="cv.address"
              class="col-5 q-ma-sm"
              dense
              label="Address"
            />
            <q-select
              outlined
              v-model="cv.distric"
              class="col-5 q-ma-sm"
              :options="districOptions"
              dense
              label="Distric"
            />
          </div>
          <div class="row">
            <q-input
              outlined
              v-model="cv.institute"
              class="col-5 q-ma-sm"
              dense
              label="Institute"
            />
            <q-input
              outlined
              v-model="cv.subject"
              class="col-5 q-ma-sm"
              dense
              label="Subject"
            />
          </div>
          <div class="row">
            <q-input
              outlined
              v-model="cv.passingYear"
              class="col-5 q-ma-sm"
              dense
              label="Passing year"
            />
          </div>
          <div class="q-pa-sm">
            <q-btn label="Submit" type="submit" dense class="q-px-sm" color="green" />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CreateCV",
  data() {
    return {
      options: ["Male", "Female"],
      districOptions: ["Dhaka", "Tangail", "Borishal", "Rangpur"],
      cv: {
        dateOfBirth: "2020/09/29",
        age: 0,
        name: "",
        fName: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        distric: "",
        institute: "",
        subject: "",
        passingYear: "",
      },
    };
  },
  watch: {
    "cv.dateOfBirth": {
      handler(date) {
        this.cv.age = Math.floor(
          (Date.now() - new Date(date).getTime()) / 31556952000
        );
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations("CV", ["SET_CV"]),
    onSubmit() {
      this.$refs["cv-form"].validate().then((success) => {
        if (success) {
          this.SET_CV({
            ...this.cv,
            id: Math.random().toString(36).slice(-10),
          });
          this.$refs["cv-form"].reset();
        } else {
          // oh no, user has filled in
          // at least one invalid value
        }
      });
    },
  },
};
</script>