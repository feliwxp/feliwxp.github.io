<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="p-2 mt-50">
      <h1 v-if="!APIResult.length">Enter Wine Data to make prediction</h1>
      <h1 v-else style="font-size: 4rem">Wine: Class {{ APIResult }}</h1>
    </div>

    <div class="p-2 w-75">
      <form @submit.prevent class="row g-3">
        <div class="col-md-3">
          <label class="form-label" for="a">alcohol</label>
          <input
            class="form-control"
            v-model.trim="winedata.a"
            type="number"
            id="a"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="b">malic_acid</label>
          <input
            class="form-control"
            v-model.trim="winedata.b"
            type="number"
            id="b"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="c">ash</label>
          <input
            class="form-control"
            v-model.trim="winedata.c"
            type="number"
            id="c"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="d">alcalinity_of_ash</label>
          <input
            class="form-control"
            v-model.trim="winedata.d"
            type="number"
            id="d"
          />
        </div>
        <div class="col-md-3">
          <label class="form-label" for="e">magnesium</label>
          <input
            class="form-control"
            v-model.trim="winedata.e"
            type="number"
            id="e"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="f">total_phenols</label>
          <input
            class="form-control"
            v-model.trim="winedata.f"
            type="number"
            id="f"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="g">flavanoids</label>
          <input
            class="form-control"
            v-model.trim="winedata.g"
            type="number"
            id="g"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="h">nonflavanoid_phenols</label>
          <input
            class="form-control"
            v-model.trim="winedata.h"
            type="number"
            id="h"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="i">proanthocyanins</label>
          <input
            class="form-control"
            v-model.trim="winedata.i"
            type="number"
            id="i"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="j">color_intensity</label>
          <input
            class="form-control"
            v-model.trim="winedata.j"
            type="number"
            id="j"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="k">hue</label>
          <input
            class="form-control"
            v-model.trim="winedata.k"
            type="number"
            id="k"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="l">od280/od315_of_diluted_wines</label>
          <input
            class="form-control"
            v-model.trim="winedata.l"
            type="number"
            id="l"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label" for="m">proline</label>
          <input
            class="form-control"
            v-model.trim="winedata.m"
            type="number"
            id="m"
          />
        </div>

        <div class="col-md-12">
          <button
            @click="predict"
            type="button"
            class="btn btn-primary btn-lg btn-block col-md-12"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import { getAPI } from "@/axios";

export default {
  name: "PredictWine",
  data() {
    return {
      on: true,
      winedata: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
        i: "",
        j: "",
        k: "",
        l: "",
        m: "",
      },
      APIResult: [],
    };
  },
  methods: {
    predict() {
      getAPI
        .get("/wine", {
          params: {
            alcohol: this.winedata.a,
            ash: this.winedata.b,
            alcalinity_of_ash: this.winedata.c,
            magnesium: this.winedata.d,
            total_phenols: this.winedata.e,
            flavanoids: this.winedata.f,
            nonflavanoid_phenols: this.winedata.g,
            proanthocyanins: this.winedata.h,
            color_intensity: this.winedata.i,
            hue: this.winedata.j,
            od315_of_diluted_wines: this.winedata.k,
            proline: this.winedata.l,
            malic_acid: this.winedata.m,
          },
        })
        .then((response) => {
          console.log("Received data successfully");
          this.APIResult = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.mt-50 {
  margin-top: 50px;
}
</style>