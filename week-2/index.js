/*
Project: App for Finding Hairsalons with Available Appointments
Classes:
  Client
  HairSalon 
  Appointment
  HairStylist

Interactions:
  HairSalon offers appointments
  Client can books appointment
  HairStylist works appointment

*/
const Client = require('./client')
const HairSalon = require('./hairsalon')
const Appointment = require('./appointment')
const HairStylist = require('./hairstylist')
const Database = require('./database')
const fs = require('fs') //to include the file system module

const Anna = new Client('Anna', 'short') 
const Stacey = new Client('Stacey', 'long')
const HappyHair = new HairSalon("Happy Hair")
const May1_noon = new Appointment ("May 1", "noon")  
const Lula = new HairStylist ("Lula", 'color')
const May3_2_00 = new Appointment ("May 3", "2:00") 
const May3_1_00 = new Appointment ("May 3", "1:00") 

HappyHair.offer(May1_noon)
HappyHair.offer(May3_2_00)
Anna.books(May1_noon)
Lula.works(May1_noon)

Database.save(HappyHair)

const happyHairDatabase = Database.load()

console.log(happyHairDatabase.appointments[0])

//Part II: async / await //

const main = async () => {
  const contents1 = await readFile(_dirname + '/files/1.txt')
  console.log(contents1)

  const contents2 = await readFile(_dirname + '/files/2.txt')
  console.log(contents2)

  const contents3 = await readFile(_dirname + '/files/3.txt')
  console.log(contents3)
}

(async () => {
  try {
      await main()
  } catch (e) {
      console.log(e)
  }
})()
