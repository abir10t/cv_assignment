<template>
  <q-page>
    <div class="q-pa-sm bg-blue text-white text-center text-bold">
      Dashboard
    </div>
    <div>

    <canvas  class="canvas" id="district-chart"></canvas>
    </div>
  </q-page>
</template>

<script>
import Chart from "chart.js";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      genders: ['Male', 'Female', 'Other'],
      datasetOptions: {
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
      chartOptions: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },

  mounted() {
      this.createChart({
        id: "district-chart",
        title:"District wise candidates",
        labels: this.uniqueDistricts,
        data: this.uniqueDistricts.map((d) => this.noOfCandidate(d))
      })

    // this.createChart({
    //   id: "age-chart",
    //   title:"Age wise candidates",
    //   labels: this.genders,
    //   data: this.genders.map((d) => this.noOfCandidate(d))
    // })

    // console.log(this.genders)
    // console.log(this.genders.map( g => this.countAge(g)))
  },
  computed: {
    ...mapGetters("CV", ["cvList"]),
    uniqueDistricts() {
      return [...new Set(this.cvList.map(({ distric }) => distric))];
    },

  },

  methods: {
    count(key, value) {
      return this.cvList.reduce(
        (counter, cv) => (cv[key] === value ? counter + 1 : counter),
        0
      );
    },
    noOfCandidate(dName) {
      return this.count('distric', dName )
    },
    countAge(gender) {
      return this.count('gender', gender )
    },
    
    createChart({ id, title, labels, data }){
      const ctx = document
        .getElementById(id)
        .getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [{
            ...this.datasetOptions,
            data, label: title,
          }],
        },
        options: this.chartOptions,
      });
    },
    createDistrictChart() {
      // var ctx = document.getElementById("district-chart").getContext("2d");
      // var myChart = new Chart(ctx, {
      //   type: "bar",
      //   data: {
      //     labels: this.uniqueDistricts,
      //     datasets: [
      //       {
      //         ...this.datasetOptions,
      //         label: "# of Votes",
      //         data: this.uniqueDistricts.map((d) => this.noOfCandidate(d)),
      //       },
      //     ],
      //   },
      //   options: this.chartOptions,
      // });
    },
    createAgeChart(){
      this.createChart({
        id: "age-chart",
        title:"District wise candidates",
        labels: this.uniqueDistricts,
        data: this.uniqueDistricts.map((d) => this.noOfCandidate(d))
      })
    }
  },
};
</script>

<style>
 .canvas {
  width: 70vw !important;
  height: 460px !important;
  padding: 10px !important;
}
  
</style>