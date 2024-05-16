//prompt) 단조화진동하는 물체 p5js 코드
//위 코드에서 진폭이 감소하는 감쇠진동 p5js 코드
//감쇠진동의 위치 y를 삼각함수를 사용하지 않고 물리 운동방정식을 활용하여 구현한 p5js 코드

let positionY; // 물체의 y 위치
let velocityY; // 물체의 y 방향 속도
let damping; // 감쇠계수
let mass; // 물체의 질량
let springConstant; // 용수철 상수

function setup() {
  createCanvas(400, 400); // 캔버스 생성 (너비: 400, 높이: 400)

  positionY = 0.5*height; // 초기 y 위치 (중앙)
  velocityY = 0; // 초기 y 방향 속도
  damping = 0.1; // 감쇠 계수
  mass = 10; // 물체의 질량
  springConstant = 0.1; // 용수철 상수
  background(220); // 배경색 설정 (연한 회색)
}

function draw() {

  // 운동 방정식을 사용하여 가속도 계산
  let force = -springConstant * positionY - damping * velocityY; // 용수철 힘과 감쇠 힘 합산
  let accelerationY = force / mass;

  // 속도 및 위치 업데이트
  velocityY += accelerationY;
  positionY += velocityY;

  // 물체 그리기
  fill(255, 0, 0); // 채우기 색상 설정 (빨강)
  ellipse(width / 2, positionY+0.5*height, 50, 50); // 원 그리기
}
