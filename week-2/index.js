/*
Project: App for Finding Hairsalons with Available Appointments
Classes:
  Client
  HairSalon 
  Appointment
  
Interactions:
  HairSalon offers appointments
  Client can reserve appointment
  
*/
const Client = require('./client')
const HairSalon = require('./hairsalon')
const Appointment = require('./appointment')
const Database = require('./database')

var anna = new Client('Anna', 'short') 
var HappyHair = new HairSalon("Happy Hair")
var May1_noon = new Appointment ("May 1", "noon")  


HappyHair.offer(May1_noon)
anna.reserve(May1_noon)
