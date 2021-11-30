# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Fact.create(text: "5g causes covid", stars:1, source:'google', username:"Larry")
Fact.create(text: "World is flat", stars:1, source:'my eyes', username:"Larry")
Fact.create(text: "Armadillos are bullet proof", stars:0, source:'internet', username:"Will")
Fact.create(text: "Some fungi create zombies, then control their minds", stars:4.2, source:'https://www.nationalgeographic.com/animals/article/110511-zombies-ants-fungus-infection-spores-bite-noon-animals-science', username:"James")
Fact.create(text: "Whales Swallow Half a Million Calories in Single Mouthful", stars:3.3, source:'https://www.nationalgeographic.com/animals/article/110511-zombies-ants-fungus-infection-spores-bite-noon-animals-science', username:"James")
puts "seeded facts size: #{Fact.all.size}"