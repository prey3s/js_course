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

var Client = class {
  constructor(name, hair) {
    this.name = name
    this.hair = hair
  }
  
  reserve(appointment) {
    this.appointment = appointment
    appointment.reservations = this.appointment
  }
} 

var anna = new Client('Anna', 'short')


var HairSalon = class {
  constructor(name) {
    this.name = name
  }
  
   offer(appointment) {
    this.appointment = appointment
    appointment.available = this.appointment
  }
}  
  
var HappyHair = new HairSalon("Happy Hair")

var Appointment = class {
  constructor(date, time) {
    this.date = date
    this.time = time
    }
}

var May1_noon = new Appointment ("May 1", "noon")  


HappyHair.offer(May1_noon)
anna.reserve(May1_noon)