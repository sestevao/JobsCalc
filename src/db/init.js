const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE profile(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      monthly_budget INT,
      days_per_week INT,
      hours_per_day INT,
      vacation_per_year INT,
      value_hour INT);`)

    await db.exec(`CREATE TABLE jobs(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      daily_hours INT,
      total_hours INT,
      created_at DATETIME);`)

    await db.run(`INSERT INTO profile VALUES (1, "Susana", "https://avatars.githubusercontent.com/u/9211533?v=4", 400, 5, 10, 4, 10);`)

    await db.run(`INSERT INTO jobs VALUES (1, "Pizzaria Guloso", 2, 1, 1617514376018);`)
    await db.run(`INSERT INTO jobs VALUES (2, "OneTwo Project", 3, 47, 1617514376018);`)

    await db.close()
  }
}

initDb.init()