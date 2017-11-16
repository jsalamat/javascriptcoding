let allEvents;
let event;
const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };

/* this is used a few places and it is vulnerable */

// The getRandomEvent() function selects an event at random from an array of events.
const getRandomEvent = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  event = allEvents[Math.floor(Math.random() * allEvents.length)];
};


// The getEventActivities() function returns a list of the activities, based on the event selected.
const getEventActivities = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];

  if (!allEvents.includes(event)) {
    return null; 
  }
  
  if (event === 'Marathon') {
    const activities = ['Running'];
    return activities.join(', '); 
  } 
  if (event === 'Triathlon') {
    const activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', '); 
  } 
  if (event === 'Decathlon') {
    const activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', '); 
  }
  
};

// The getDaysToTrain() function returns the number of days to train, based on the event selected.
const getDaysToTrain = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  if (!allEvents.includes(event)) {
    return null; 
  }
  
  return eventTrainingTimes[event];
};


getRandomEvent();
console.log('Your event is a ' + event + '. Your event activities consist of ' + getEventActivities() + '. You have ' + getDaysToTrain() +  ' days to train.');
