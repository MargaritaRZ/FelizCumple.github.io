const wishes = [
  "Que siempre sonrías con el corazón 💖",
  "Que cada día esté lleno de magia ✨",
  "Que nunca te falte el amor verdadero ❤️",
  "Que los sueños más locos se te cumplan 😍",
  "Que encuentres alegría hasta en los detalles 🌈",
  "Que tu corazón se sienta en paz 🕊️",
  "Que viajes a donde tu alma quiera ✈️",
  "Que nunca te falten abrazos sinceros 🤗",
  "Que tengas salud, fuerza y valentía 💪",
  "Que sigas brillando como la estrella que eres 🌟",
  "Que el amor propio nunca te abandone 💕",
  "Que siempre tengas motivos para reír 😂",
  "Que la vida te sorprenda bonito 🎁",
  "Que tus metas se conviertan en realidad 🏆",
  "Que tengas amistades fieles e increíbles 👫",
  "Que te sientas orgullosa de ti 🥰",
  "Que sigas creciendo y aprendiendo 📚",
  "Que el universo conspire a tu favor 🌌",
  "Que el tiempo siempre te regale momentos bellos ⏳",
  "Que te sientas amada cada día 💓",
  "Que cada año sea mejor que el anterior 🎈",
  "Que nunca pierdas tu esencia 🌻",
  "¡Y que hoy sea uno de tus días más felices! 🎉"
];

let litCount = 0;
const candlesContainer = document.querySelector('.candles');
const wishBox = document.getElementById('wish-box');
const wishText = document.getElementById('wish-text');
const finalMessage = document.getElementById('final-message');

wishes.forEach((wish, index) => {
  const candle = document.createElement('div');
  candle.classList.add('candle');

  const flame = document.createElement('div');
  flame.classList.add('flame');
  candle.appendChild(flame);

  candle.addEventListener('click', () => {
    if (!candle.classList.contains('lit')) {
      candle.classList.add('lit');
      wishText.textContent = wish;
      wishBox.classList.remove('hidden');
      litCount++;
      if (litCount === wishes.length) {
        finalMessage.classList.remove('hidden');
      }
    }
  });

  candlesContainer.appendChild(candle);
});
