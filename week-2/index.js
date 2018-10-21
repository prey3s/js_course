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

const Anna = new Client('Anna', 'short') 
const HappyHair = new HairSalon("Happy Hair")
const May1_noon = new Appointment ("May 1", "noon")  
const Lula = new HairStylist ("Lula", 'color')


HappyHair.offer(May1_noon)
Anna.books(May1_noon)
Lula.works(May1_noon)


Database.save(May1_noon)
Database.save(Anna)
Database.save(HappyHair)

const loadedFile = Database.load()
console.log(loadedFile.reservedBy)
