const showTime = [{
date: "Mon Sept 06 2021",
venue: "Ronald Lane",
location: "San Francisco, CA",
},
{
date: "Tue Sept 21 2021",
venue: "Pier 3 East",
location: "San Francisco, CA",
},
{
date: "Fri Oct 15 2021",
venue: "View Lounge",
location: "San Francisco, CA",
},
{
date: "Sat Nov 06 2021",
venue: "Hyatt Agency",
location: "San Francisco, CA",
},
{
date: "Fri Nov 26 2021",
venue: "Moscow Center",
location: "San Francisco, CA",
},
{
date: "Wed Dec 15 2021",
venue: "Press Club",
location: "San Francisco, CA",
}];

const showTimeList = document.querySelector('.showtime');

function createShowTimes(){
    showTimeList.innerText = '';
    
    for(let i = 0; i < showTime.length; i++){
        const showTimeDateList = document.createElement('h5');
        showTimeDateList.innerText = "DATE";

        const showTimeDate = document.createElement('h3');
        showTimeDate.innerText = showTime[i].date;

        const showTimeVenueList = document.createElement('h5');
        showTimeVenueList .innerText = "VENUE";

        const showTimeVenue = document.createElement('h3');
        showTimeVenue.innerText = showTime[i].venue;

        const showTimeLocationList = document.createElement('h5');
        showTimeLocationList.innerText = "LOCATION";

        const showTimeLocation = document.createElement('h3');
        showTimeLocation.innerText = showTime[i].location;

        showTimeList.appendChild(showTimeDateList);
        showTimeList.appendChild(showTimeDate );
        showTimeList.appendChild(showTimeVenueList);
        showTimeList.appendChild(showTimeVenue);
        showTimeList.appendChild(showTimeLocationList);
        showTimeList.appendChild(showTimeLocation);
    }
}

createShowTimes();