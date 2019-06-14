const meteoro = new mojs.Burst({ //Const = Variável de Valor fixa,declarando e atribuindo com valor novo burst
  radius: { 0: 250 }, //Raio de distância do início e fim do meteoro
  count: 3, //quantidade dos meteoros
  top: '80%', //distância do meteoro referente ao topo do documento
  left: '47%', //distância do meteoro referente ao lado esquerdo do documento
  degree: 0, //o grau das particulas que se formam no burst. Ex: 0 = Todas vão pra mesma direção
  children: { //Filho: características das partículas
    shape: 'line', //forma das partículas
    stroke: 'white', //linha de fora
    strokeWidth: 10, //grossura da linha
    radius: 60, //raio da partícula
    left: 'stagger(50)', //Distância horizontal das partículas
    delay: [40, 0, 40], //delay de cada partícula
    duration: 1000 //Duração em milisegundos do meteoro
  } });


const fogos1T = new mojs.Burst({
  radius: { 0: 100 },
  count: 25,
  top: '40%',
  children: {
    shape: 'line',
    stroke: { 'white': 'blue' },
    strokeWidth: 5, //largura da linha do conteúdo
    strokeDasharray: 40, //Controla o espaçamento das linhas
    radius: { 10: 100 },
    delay: 1000,
    duration: 2500 } });



const brilho1T = new mojs.Burst({
  radius: { 0: 150 },
  count: 10,
  top: '40%',
  children: {
    shape: 'cross',
    stroke: 'yellow',
    radius: 20,
    delay: 1000,
    duration: 1000 } });



const faisca1T = new mojs.Burst({
  radius: { 0: 150 },
  count: 10,
  top: '40%',
  children: {
    shape: 'line',
    stroke: 'white',
    radius: { 10: 20 },
    delay: 1000,
    duration: 1500 } });



const fogos2L = new mojs.Burst({
  radius: { 0: 100 },
  count: 25,
  left: '46%',
  children: {
    shape: 'line',
    stroke: { 'white': 'red' },
    strokeWidth: 5,
    strokeDasharray: 40,
    radius: { 10: 100 },
    delay: 1000,
    duration: 2500 } });



const brilho2L = new mojs.Burst({
  radius: { 0: 150 },
  count: 10,
  left: '46%',
  children: {
    shape: 'cross',
    stroke: 'yellow',
    radius: 20,
    delay: 1000,
    duration: 1000 } });



const faisca2L = new mojs.Burst({
  radius: { 0: 150 },
  count: 10,
  left: '46%',
  children: {
    shape: 'line',
    stroke: 'white',
    radius: { 10: 20 },
    delay: 1000,
    duration: 1500 } });



const fogos3R = new mojs.Burst({
  radius: { 0: 100 },
  count: 25,
  left: '54%',
  children: {
    shape: 'line',
    stroke: { 'white': 'purple' },
    strokeWidth: 5,
    strokeDasharray: 40,
    radius: { 10: 100 },
    delay: 1000,
    duration: 2500 } });



const brilho3R = new mojs.Burst({
  radius: { 0: 150 },
  count: 10,
  left: '54%',
  children: {
    shape: 'cross',
    stroke: 'yellow',
    radius: 20,
    delay: 1000,
    duration: 1000 } });



const faisca3R = new mojs.Burst({
  radius: { 0: 150 },
  count: 10,
  left: '54%',
  children: {
    shape: 'line',
    stroke: 'white',
    radius: { 10: 20 },
    delay: 1000,
    duration: 1500 } });



const linhadotempo = new mojs.Timeline({
  repeat: 999 }).

add(meteoro, fogos1T, brilho1T, faisca1T,
fogos2L, brilho2L, faisca2L,
fogos3R, brilho3R, faisca3R).
play();