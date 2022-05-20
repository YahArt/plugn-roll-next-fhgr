<template>
  <div class="uk-container uk-margin">
    <article class="uk-article">
      <h1 class="uk-article-title">Für jede Branche die richtige Lösung</h1>
      <p class="line"></p>

      <p
        class="uk-text-lead"
      >So verschieden die Ansprüche unterschiedlicher Branchen auch sind, so vielseitig sind die Lösungen von PLUG’N ROLL. Entdecken Sie selbst, welche Möglichkeiten PLUG’N ROLL Ihnen bietet.</p>

      <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <span uk-icon="icon: home; ratio: 2"></span>
            <h3 class="uk-card-title">GEMEINDEN & STÄDTE</h3>
            <p>Machen Sie einen Schritt in die Zukunft und bieten Sie Ihren Bürgern und Besuchern eine komfortable Lademöglichkeit. Werden Sie Teil unseres intelligenten Ladenetzwerks für Elektrofahrzeuge.</p>
            <button class="uk-button uk-button-primary more-button">Mehr erfahren</button>
          </div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <span uk-icon="icon: home; ratio: 2"></span>
            <h3 class="uk-card-title">IMMOBILIENBESITZER UND -VERWALTER</h3>
            <p>Smarte Lademöglichkeiten für Elektroautos steigern den Wert von Immobilien nachhaltig und machen sie attraktiver für solvente Interessenten.</p>
            <button class="uk-button uk-button-primary more-button">Mehr erfahren</button>
          </div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <span uk-icon="icon: heart; ratio: 2"></span>
            <h3 class="uk-card-title">TOURISMUS & GASTRONOMIE</h3>
            <p>Die Gäste werden immer anspruchsvoller. Bequeme Lademöglichkeiten für Elektroautos sind ein Service, den man heute erwartet. Schliessen Sie sich an und machen Sie Ihr Gastgewerbe so attraktiver.</p>
            <button class="uk-button uk-button-primary more-button">Mehr erfahren</button>
          </div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <span uk-icon="icon: bag; ratio: 2"></span>
            <h3 class="uk-card-title">UNTERNEHMEN & ARBEITGEBER</h3>
            <p>Fördern Sie Ihr ökologisches Image und Ihre Attraktivität als Arbeitgeber und erweitern Sie Ihre Fahrzeugflotte mit Elektroautos. Ihre Mitarbeiter werden es Ihnen danken.</p>
            <button class="uk-button uk-button-primary more-button">Mehr erfahren</button>
          </div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <span uk-icon="icon: bolt; ratio: 2"></span>
            <h3 class="uk-card-title">TANKSTELLEN</h3>
            <p>Strom ist der Kraftstoff von morgen. Verpassen Sie nicht den Anschluss: Satteln Sie als Tankstellenbetreiber rechtzeitig um und profitieren Sie vom Wachstumsmarkt der Elektromobilität.</p>
            <button class="uk-button uk-button-primary more-button">Mehr erfahren</button>
          </div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <span uk-icon="icon: users; ratio: 2"></span>
            <h3 class="uk-card-title">PARKPLATZ- & PARKHAUSBETREIBER</h3>
            <p>Parken und Laden gehören einfach zusammen. Machen Sie Ihr Parkhaus oder Ihren Parkplatz bereit für die Zukunft der Mobilität und erschliessen Sie sich neue Umsatzmöglichkeiten.</p>
            <button class="uk-button uk-button-primary more-button">Mehr erfahren</button>
          </div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <span uk-icon="icon: cart; ratio: 2"></span>
            <h3 class="uk-card-title">EINZELHANDEL & FILIALEN</h3>
            <p>Einfach das Elektroauto während dem Einkauf aufladen: Bieten Sie Ihren Kunden diese Möglichkeit und erhöhen Sie die Attraktivität Ihrer Ladengeschäfte für die wachsende Zahl der Elektroautobesitzer. Denn längere Besuchszeiten bedeuten mehr Konsum.</p>
            <button class="uk-button uk-button-primary more-button">Mehr erfahren</button>
          </div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <span uk-icon="icon: bolt; ratio: 2"></span>
            <h3 class="uk-card-title">AUTOGARAGEN</h3>
            <p>Bieten Sie Ihren Kunden ein Komplettpaket: die passende Ladelösung zum neuen Elektroauto gleich dazu.</p>
            <button class="uk-button uk-button-primary more-button">Mehr erfahren</button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Welcome",
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

.line {
  border-bottom: 2px solid rgb(168, 173, 0);
  width: 20%;
  text-align: center;
  margin: 0 auto;
}

.more-button {
  background-color: rgb(168, 173, 0);
}
</style>
