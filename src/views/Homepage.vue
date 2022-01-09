
<template>
  <div>
    <v-parallax height="100vh" class="fullscreen" src="">
      <v-row align="center" justify="center">
        <v-col class="text-center pa-0 mb-15" cols="12">
          <p class="title-name mb-4 pb-4">
            Sagar Patel
          </p>
          <p class="lead" style="margin-bottom: 5px">
            Software Engineer @
            <a class="white--text links underline" href="https://pointclickcare.com/"
              >PointClickCare</a
            >
          </p>
          <p class="lead" style="margin-bottom: 5px">
            Computer Science, Class of 2021
          </p>

          <div class="mt-8">
            <v-btn class="white--text ma-2 links" rounded outlined>
              <a class="white--text" href="https://www.linkedin.com/in/p-sagar/"
                >Linkedin</a
              >
            </v-btn>
            <v-btn class="white--text ma-2 links" rounded outlined>
              <a class="white--text" href="https://github.com/sagar5534"
                >Github</a
              >
            </v-btn>
            <v-btn class="white--text ma-2 links" rounded outlined>
              <a class="white--text" href="mailto:sagar.rpatel@outlook.com"
                >Email</a
              >
            </v-btn>
            <v-btn class="white--text ma-2 links" rounded outlined>
              <a class="white--text" href="/SagarResume.pdf">Resume</a>
            </v-btn>
          </div>

          <v-btn
            class="mx-2 mt-8"
            outlined
            small
            fab
            color="white"
            @click="$vuetify.goTo('.memoria')"
          >
            <v-icon dark>mdi-chevron-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <section class="light lighten-4 pa-4 memoria">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="6" align="center" class="mt-4">
            <v-img contain src="/Memoria_Logo_White.png" max-height="160">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p>
              Securely back-up your photos and videos to your own servers and
              enjoy them from anywhere.
            </p>

            <v-container class="light lighten-5" >
              <v-row no-gutters class="align-center fill-height ma-2">
                <v-col cols="12" sm="6">
                  Core Service
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn class="black--text ma-2 links" rounded outlined>
                    <a
                      class="black--text"
                      href="https://www.linkedin.com/in/p-sagar/"
                      >Source Code</a
                    >
                  </v-btn>
                </v-col>
              </v-row>
              <v-row no-gutters class="align-center fill-height ma-2">
                <v-col cols="12" sm="6">
                  Web App
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn class="black--text ma-2 links" rounded outlined>
                    <a
                      class="black--text"
                      href="https://www.linkedin.com/in/p-sagar/"
                      >Source Code</a
                    >
                  </v-btn>
                </v-col>
              </v-row>

              <v-row no-gutters class="memoriaApps align-center ma-2">
                <v-col cols="12" sm="6">
                  IOS App
                </v-col>
                <v-col cols="12" sm="6">
                  Coming soon*
                  <!-- <a href="https://apple.co/3dmHKfW" target="_blank">
                    <v-img
                      height="55px"
                      width="140px"
                      contain
                      src="/applestore.svg"
                    ></v-img>
                  </a> -->
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <v-col cols="12" sm="6">
            <v-img contain max-height="60vh" src="/iphone-12--product-red.png">
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

    <section class="grey lighten-4 pa-4 kuppa">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="4">
            <v-img contain max-height="65vh" src="/Home.png">
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
            <v-img contain max-height="60vh" src="/Scan.png">
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
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data: () => ({}),
  methods: {},
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

.proj {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  @import './Homepage.css';
</style>
