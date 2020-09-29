<template>
  <q-page>
    <div class="q-pa-sm bg-blue text-white text-bold text-center">
      Dynamic CV Template
    </div>
    <div>
      <q-btn flat color="primary" label="Dashboard" clickable to="/" />
      <q-btn flat color="primary" label="Create CV" clickable to="/createcv" />
      <q-btn flat color="primary" label="CV List" clickable to="/cvlist" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>
