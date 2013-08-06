# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# STEP 6: Create basic seed data for a 5 tasks here

# Task.delete_all
task1 = Task.create([{name: 'Eat Avacados'}])
task2 = Task.create([{name: "Fix your Fixed Gear"}])
task3 = Task.create([{name: "Button up your button down"}])
task4 = Task.create([{name: "Its Tea time."}])
task5 = Task.create([{name: "High Five yourself"}])

# Alternative Methods
# Task.create(name: 'Invent a new drink mixing champagne and OJ')