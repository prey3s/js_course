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
const Stacey = new Client('Stacey', 'long')
const HappyHair = new HairSalon("Happy Hair")
const May1_noon = new Appointment ("May 1", "noon")  
const Lula = new HairStylist ("Lula", 'color')
const May3_2_00 = new Appointment ("May 3", "2:00") 

HappyHair.offer(May1_noon)
HappyHair.offer(May3_2_00)
Anna.books(May1_noon)
Lula.works(May1_noon)


//Database.save(May1_noon)
//Database.save(Anna)
Database.save(HappyHair)

const HappyHairAppts = Database.load()

const LulaNew = HappyHairAppts.appointments[0].stylist

LulaNew.works(May3_2_00)
