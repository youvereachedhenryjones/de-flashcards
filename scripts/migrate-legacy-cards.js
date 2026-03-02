const fs = require('fs');
const path = require('path');

function loadCards(relativePath) {
  const filePath = path.join(__dirname, '..', relativePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function writeCards(relativePath, cards) {
  const filePath = path.join(__dirname, '..', relativePath);
  const payload = JSON.stringify(cards, null, 2) + '\n';
  fs.writeFileSync(filePath, payload, 'utf8');
}

function convertCards(cards, idPrefix) {
  return cards.map((card, index) => ({
    id: `${idPrefix}-L${String(index + 1).padStart(3, '0')}`,
    category: card.category,
    question: card.front,
    answer: card.back,
    difficulty: 'intermediate',
  }));
}

function summarizeByCategory(cards, summary) {
  cards.forEach((card) => {
    summary[card.category] = (summary[card.category] || 0) + 1;
  });
}

function main() {
  const airflowLegacy = loadCards('cards/archive/airflow-legacy-front-back.json');
  const sparkLegacy = loadCards('cards/archive/spark-legacy-front-back.json');

  const airflowConverted = convertCards(airflowLegacy, 'airflow');
  const sparkConverted = convertCards(sparkLegacy, 'spark');

  writeCards('cards/airflow-legacy-cards.json', airflowConverted);
  writeCards('cards/spark-legacy-cards.json', sparkConverted);

  const summary = {};
  summarizeByCategory(airflowConverted, summary);
  summarizeByCategory(sparkConverted, summary);

  console.log('Summary: cards converted per category');
  Object.keys(summary)
    .sort()
    .forEach((category) => {
      console.log(`${category}: ${summary[category]}`);
    });
}

main();
