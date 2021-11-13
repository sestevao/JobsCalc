const Profile = require("../models/Profile")

module.exports = {
  async index(req, res) {
    return res.render("profile", { profile: await Profile.get() })
  },

  async update(req, res) {
    const data = req.body //'req.body' to get the data
    const weeksPerYear = 52 //define how many weeks you have in a year: 52
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12 //remove the vacation weeks of the year, to get how many weeks you have in 1 month
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"] //total hours worked in the week
    const monthlyTotalHours = weekTotalHours * weeksPerMonth //hours worked in the month

    valueHour = data["monthly-budget"] / monthlyTotalHours //what will be the value of my hour?

    const profile = await Profile.get()

    await Profile.update({
      ...profile,
      ...req.body,
      "value-hour": valueHour,
    })

    return res.redirect("/profile")
  },
}