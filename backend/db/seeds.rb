# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user_1 = User.create(username: "Bob", password: "testtest")
user_2 = User.create(username: "Test", password: "testtest")

user_1.messages.create(content: "This app rocks!")
user_2.messages.create(content: "Right???")
user_1.messages.create(content: "I just wish we didn't have to refresh all the time to see updates... hmmm")
user_2.messages.create(content: "I heard of this! Isn't this... websockets?? We could implement this using Rails Actioncable!")
user_1.messages.create(content: "Good idea!")
