<template>
  <div>
    <v-parallax dark height="100vh" class="fullscreen" src="">
      <v-row align="center" justify="center">
        <v-col class="text-center pa-0 mb-15" cols="12">
          <p class="title-name mb-4 pb-4">
            Sagar Patel
          </p>
          <p class="lead" style="margin-bottom: 5px">
            Ex Software Engineering Intern @ PointClickCare
          </p>
          <p class="lead" style="margin-bottom: 5px">
            Computer Science, Class of 2021
          </p>

          <div class="mt-8">
            <v-btn class="ma-2 links" rounded medium outlined color="primary">
              <a href="/SagarResume.pdf">Resume</a>
            </v-btn>
            <v-btn class="ma-2 links" rounded outlined color="primary">
              <a href="mailto:sagar.rpatel@outlook.com">Email</a>
            </v-btn>
            <v-btn class="ma-2 links" rounded outlined color="primary">
              <a href="https://github.com/sagar5534">Github</a>
            </v-btn>
            <v-btn class="ma-2 links" rounded outlined color="primary">
              <a href="https://www.linkedin.com/in/p-sagar/">Linkedin</a>
            </v-btn>
          </div>

          <v-btn
            class="mx-2 mt-10"
            fab
            dark
            color="indigo"
            @click="$vuetify.goTo('.kuppa')"
          >
            <v-icon dark>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <section class="grey lighten-4 pa-4 kuppa">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="4" align="center" class="mt-4">
            <p class="projectTitle">Kuppajo Espresso Bar!</p>
            <p>Rewards system for Cafe Franchise</p>
            <a href="https://apple.co/3dmHKfW" target="_blank">
              <v-img
                height="55px"
                width="140px"
                contain
                src="/applestore.svg"
              ></v-img>
            </a>
          </v-col>

          <v-col cols="12" sm="4">
            <v-img contain max-height="80vh" src="/Home.png"></v-img>
          </v-col>

          <v-col class="d-none d-sm-flex" cols="12" sm="4">
            <v-img contain max-height="80vh" src="/Scan.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data: () => ({
    MileageTypes: [],
  }),
  methods: {
    goTo(id) {
      this.$router.push({ name: "Detail", params: { filter: id } });
    },
  },
};
</script>

<style lang="scss">
.fullscreen {
  width: 100%;
  height: 100vh;
}

a {
  text-decoration: none;
}
// Header

.title-name {
  font-family: "Pacifico";
  font-size: 100px;
  color: #333;
}

.lead {
  color: #757575;
  font-family: "Nunito Sans", sans-serif;
  font-size: 21px;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 5px;
}

.links {
  font-family: "Nunito Sans", sans-serif;
  font-size: 21px;
}

// Projects
.projectTitle {
  color: #333;
  font-family: "Nunito Sans", sans-serif;
  font-size: 40px;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 5px;
}

.project {
  height: 80vh;
  width: 100%;
}

.grey {
  background-color: #333;
}


</style>
