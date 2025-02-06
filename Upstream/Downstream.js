function time(distance, boatSpeed, stream) {
  let [direction, speed] = stream.split(" ");
  speed = parseFloat(speed);
  let effectiveSpped =
    direction.toLowerCase() === "uperstream"
      ? boatSpeed - speed
      : boatSpeed + speed;
  return (distance / effectiveSpped).toFixed(2);
}
