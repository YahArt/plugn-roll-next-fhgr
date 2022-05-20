<template>
  <div class="uk-container-expand">
    <div
      id="register-bg"
      class="
        uk-height-1-1
        uk-flex
        uk-flex-center
        uk-flex-middle
        uk-background-cover
        uk-dark
      "
      data-src="https://images.unsplash.com/photo-1635105092258-4d1224742975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2766&q=80"
      uk-img
    >
      <p class="uk-h1 uk-text-left uk-text-bold" id="register-bg-text">
        PLUG'N ROLL.<br />
        E-MOBILTY.<br />
        CONNECTED.<br />
      </p>

      <div class="register-section">
        <div class="uk-padding">
          <img
            class="uk-margin-medium-bottom"
            src="../assets/images/edriverportal.svg"
            width="350"
            uk-svg
          />
          <div class="uk-text-left">
            <h2 class="uk-text-bold">Neues Konto erstellen</h2>
            <p>Ich möchte mich registrieren als:</p>

            <div
              class="
                uk-card uk-card-default uk-card-small uk-card-body uk-margin
              "
            >
              <div class="uk-card-badge uk-label">Privater E-Driver</div>
              <h3 class="uk-card-title">Ich fahre eine Elektroauto.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div
              class="
                uk-card uk-card-default uk-card-small uk-card-body uk-margin
              "
            >
              <div class="uk-card-badge uk-label">Geschäftskunde</div>
              <h3 class="uk-card-title">Ich vertrete eine Firma.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div
              class="
                uk-card uk-card-default uk-card-small uk-card-body uk-margin
              "
            >
              <div class="uk-card-badge uk-label">
                Individueller Flottenkunde
              </div>
              <h3 class="uk-card-title">
                Ich wurde von meiner Firma eingeladen.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {},
  data: function () {
    return {};
  },
};
</script>

<style scoped>
h1 {
  color: rgb(123, 121, 123);
}

.uk-label {
  background: rgb(168, 173, 0);
}

.line {
  border-bottom: 2px solid rgb(168, 173, 0);
  width: 20%;
  text-align: center;
  margin: 0 auto;
}

.register-section {
  background: #f4f5f8;
  height: 100%;
  width: 40%;
  position: absolute;
  right: 0;
}

#register-bg {
  height: 100vh;
}

#register-bg-text {
  position: absolute;
  bottom: 3rem;
  left: 1rem;
  color: white;
}
</style>
