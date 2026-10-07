function formatAs12HourClock(time) {
  if (typeof time !== "string") {
    throw new TypeError("time must be a string in HH:mm format");
  }

  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (hours > 12) {
    const pmHours = String(hours - 12).padStart(2, "0");
    return `${pmHours}:${minutes} pm`;
  }

  if (hours === 12) {
    return `${time} pm`;
  }

  return `${time} am`;
}

export {formatAs12HourClock};
