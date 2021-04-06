let data = {
  name: "Susana",
  avatar: "https://github.com/susanaestevao.png",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 10,
  "vacation-per-year": 4,
  "value-hour": 10.5,
}

module.exports = {
  get() {
    return data;
  },

  update(newData) {
    data = newData;
  },
}