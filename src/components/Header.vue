<template>
  <div>
    <nav class="uk-navbar-container uk-padding-small" uk-navbar>
      <button
        id="hamburger-toggle"
        class="uk-navbar-toggle"
        uk-navbar-toggle-icon
        uk-toggle="target: #hamburger-menu"
        type="button"
      ></button>
      <div class="uk-navbar-left">
        <div class="uk-logo">
          <img
            @click="navigateToHome"
            id="logo"
            src="../assets/images/logo.png"
            alt="Plug and Roll Logo"
          />
        </div>
      </div>

      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <a href="#">Geschäftskunden</a>
          </li>
          <li>
            <a href="#">Produkte & Dienstleistungen</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="#">Ladestationen</a>
                </li>
                <li>
                  <a href="#">Installationen</a>
                </li>
                <li>
                  <a href="#">Lastmanagement</a>
                </li>
                <li>
                  <a href="#">Servicepakete</a>
                </li>
                <li>
                  <a href="#">Software</a>
                </li>
                <li>
                  <a href="#">Offerte anfragen</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Tipps und Tricks</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="#">Ladeanleitung</a>
                </li>
                <li>
                  <a href="#">Zu Hause laden</a>
                </li>
                <li>
                  <a href="#">Karte</a>
                </li>
                <li>
                  <a href="#">Webinar</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Partner</a>
          </li>
          <li>
            <a href="#">Über Uns</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="#">Referenzen</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Geschichte</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#" uk-toggle="target: #login-modal">Login</a>
          </li>
          <li>
            <a href="#" uk-toggle="target: #register-modal">Registrieren</a>
          </li>
        </ul>
      </div>

      <div id="hamburger-menu" uk-offcanvas>
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close></button>
          <ul class="uk-nav">
            <li class="uk-active">
              <a href="#">Geschäftskunden</a>
            </li>
            <li>
              <a href="#">Produkte & Dienstleistungen</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="#">Ladestationen</a>
                  </li>
                  <li>
                    <a href="#">Installationen</a>
                  </li>
                  <li>
                    <a href="#">Lastmanagement</a>
                  </li>
                  <li>
                    <a href="#">Servicepakete</a>
                  </li>
                  <li>
                    <a href="#">Software</a>
                  </li>
                  <li>
                    <a href="#">Offerte anfragen</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Tipps und Tricks</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="#">Ladeanleitung</a>
                  </li>
                  <li>
                    <a href="#">Zu Hause laden</a>
                  </li>
                  <li>
                    <a href="#">Karte</a>
                  </li>
                  <li>
                    <a href="#">Webinar</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Partner</a>
            </li>
            <li>
              <a href="#">Über Uns</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="#">Referenzen</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Geschichte</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#" uk-toggle="target: #login-modal">Login</a>
            </li>
            <li>
              <a href="#" uk-toggle="target: #register-modal">Registrieren</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="login-modal" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title uk-text-center">Login</h2>
        <p class="line"></p>
        <button class="uk-modal-close-default" type="button" uk-close></button>

        <p uk-margin>
          <button
            class="uk-button uk-button-default uk-button-large uk-width-1-1 login-option-button uk-text-left uk-padding-small"
          >
            <span uk-icon="icon: user; ratio: 1"></span>
            Privater E-Drive : Ich fahre ein Elektroauto.
          </button>
          <button
            class="uk-button uk-button-default uk-button-large uk-width-1-1 login-option-button uk-text-left uk-padding-small"
          >
            <span uk-icon="icon: server; ratio: 1"></span>
            Geschäftskunde: Ich vertrete eine Firma.
          </button>
          <button
            class="uk-button uk-button-default uk-button-large uk-width-1-1 login-option-button uk-text-left uk-padding-small"
          >
            <span uk-icon="icon: mail; ratio: 1"></span>
            Individueller Flottenkunde: Von meiner Firma eingeladen.
          </button>
        </p>
      </div>
    </div>

    <div id="register-modal" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title uk-text-center">Registrieren als</h2>
        <p class="line"></p>
        <button class="uk-modal-close-default" type="button" uk-close></button>

        <p uk-margin>
          <button
            class="uk-button uk-button-default uk-button-large uk-width-1-1 login-option-button uk-text-left uk-padding-small"
          >
            <span uk-icon="icon: user; ratio: 1"></span>
            Privater E-Drive : Ich fahre ein Elektroauto.
          </button>
          <button
            class="uk-button uk-button-default uk-button-large uk-width-1-1 login-option-button uk-text-left uk-padding-small"
          >
            <span uk-icon="icon: server; ratio: 1"></span>
            Geschäftskunde: Ich vertrete eine Firma.
          </button>
          <button
            class="uk-button uk-button-default uk-button-large uk-width-1-1 login-option-button uk-text-left uk-padding-small"
          >
            <span uk-icon="icon: mail; ratio: 1"></span>
            Individueller Flottenkunde: Von meiner Firma eingeladen.
          </button>
        </p>
      </div>
    </div>

    <div id="newsletter-modal" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title uk-text-center">Abonnieren Sie unseren Newsletter</h2>
        <p class="line"></p>

        <p class="uk-text-center">
          <span uk-icon="icon: bolt; ratio: 1"></span> Bleiben Sie immer auf dem neusten Stand der Elektromibilität
          <span
            uk-icon="icon: bolt; ratio: 1"
          ></span>
        </p>

        <form class="uk-form-stacked">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">E-Mail</label>
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="form-stacked-text"
                type="email"
                placeholder="Ihre E-Mail Adresse"
              />
            </div>
          </div>

          <button class="uk-button uk-button-primary subscribe-button" type="submit">Abonnieren</button>
        </form>

        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit';

export default {
  name: "Header",
  props: {},
  components: {},
  methods: {
    navigateToHome: function () {
      this.$router.push("/");
    }
  },
  mounted: function () {
    setTimeout(() => {
      UIkit.modal(document.getElementById("newsletter-modal")).show();
    }, 60000);
  }
};
</script>

<style scoped>
.line {
  border-bottom: 2px solid rgb(168, 173, 0);
  width: 20%;
  text-align: center;
  margin: 0 auto;
}

.login-option-button {
  border: 1px solid rgb(168, 173, 0);
  color: rgb(123, 121, 123);
  font-weight: 500;
  transition: color 250ms linear;
}

.login-option-button:hover {
  border: 1px solid rgb(168, 173, 0);
  color: rgb(168, 173, 0);
}

#newsletter-modal span {
  color: rgb(168, 173, 0);
}

.subscribe-button {
  background-color: rgb(168, 173, 0);
}

.uk-navbar-container {
  background-color: #3d3c3c;
}

li.uk-active > a {
  color: rgb(168, 173, 0);
}

#hamburger-toggle {
  color: rgb(168, 173, 0);
  display: none;
}

.uk-offcanvas-bar {
  background-color: #3d3c3c;
}

#logo {
  max-height: 60px;
  cursor: pointer;
}

@media (max-width: 1200px) {
  #hamburger-toggle {
    display: block;
  }

  .uk-navbar-center {
    display: none;
  }

  .uk-navbar-right {
    display: none;
  }
}
</style>
