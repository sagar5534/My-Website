<template>
  <div>
    <v-parallax height="100vh" class="fullscreen" src="">
      <v-row align="center" justify="center">
        <v-col class="text-center pa-0 mb-15" cols="12">
          <p class="title-name mb-4 pb-4">
            Sagar Patel
          </p>
          <p class="lead" style="margin-bottom: 5px">
            Software Engineer @ PointClickCare
          </p>
          <p class="lead" style="margin-bottom: 5px">
            Computer Science, Class of 2021
          </p>

          <div class="mt-8">
            <v-btn class="white--text ma-2 links" rounded outlined>
              <a class="white--text" href="/SagarResume.pdf">Resume</a>
            </v-btn>
            <v-btn class="white--text ma-2 links" rounded outlined>
              <a class="white--text" href="mailto:sagar.rpatel@outlook.com"
                >Email</a
              >
            </v-btn>
            <v-btn class="white--text ma-2 links" rounded outlined>
              <a class="white--text" href="https://github.com/sagar5534"
                >Github</a
              >
            </v-btn>
            <v-btn class="white--text ma-2 links" rounded outlined>
              <a class="white--text" href="https://www.linkedin.com/in/p-sagar/"
                >Linkedin</a
              >
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
            <p>Rewards system for Local Toronto Cafe</p>
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
            <v-img contain max-height="80vh" src="/Home.png">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>

          <v-col class="d-none d-sm-flex" cols="12" sm="4">
            <v-img contain max-height="80vh" src="/Scan.png">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
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
    imgUrl: null,
  }),
  methods: {
    goTo(id) {
      this.$router.push({ name: "Detail", params: { filter: id } });
    },
  },
  mounted() {
    let img = new Image();
    img.src = "/Home.png";

    img.onload = () => {
      console.log("img loaded");
      this.imgUrl = img.src;
      console.log("img loaded", this.imgUrl);
    };
  },
};
</script>

<style lang="scss">
.fullscreen {
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradient 10s ease infinite;
  -moz-animation: gradient 10s ease infinite;
  animation: gradient 10s ease infinite;

  @-webkit-keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}

a {
  text-decoration: none;
}
// Header

.title-name {
  font-family: "Pacifico";
  font-size: 100px;
  color: #fff;
}

.lead {
  color: #fff;
  font-family: "Nunito Sans", sans-serif;
  font-size: 21px;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 5px;
}

.links {
  color: #fff;
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
