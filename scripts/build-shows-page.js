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

const showTimeListContainer = document.getElementById('showtime');
const showMainContainer = document.createElement('div');
showMainContainer.classList.add("show-container")
const showText = document.createElement('h2');
showText.classList.add("show-text");
showText.innerText = "Shows";
showMainContainer.appendChild(showText);


const tabletInfoContainer = document.createElement('li')
tabletInfoContainer.classList.add("tablet-info");
// showMainContainer.appendChild(tabletInfoContainer);

const tableDate = document.createElement('h6');
tableDate.classList.add("show__date");
tableDate.innerText = "DATE";
tabletInfoContainer.appendChild(tableDate);

const tableVenue = document.createElement('h6');
tableVenue.classList.add("show__venue");
tableVenue.innerText = "VENUE";
tabletInfoContainer.appendChild(tableVenue);

const tableLocation = document.createElement('h6');
tableLocation.classList.add("show__location");
tableLocation.innerText = "LOCATION";
tabletInfoContainer.appendChild(tableLocation);

const tableGap = document.createElement('div');
tableGap.classList.add("show__gap");
tabletInfoContainer.appendChild(tableGap);




const showTimeList = document.createElement('ul');
const showTimeListItem = document.createElement('li');
showTimeListItem.classList.add("showtime-container");

showTimeList.appendChild(tabletInfoContainer);
showMainContainer.appendChild(showTimeList)
showTimeListContainer.appendChild(showMainContainer);

function createShowTimes() {
    showTimeListItem.innerText = '';

    for (let i = 0; i < showTime.length; i++) {
        const showTimeListItem = document.createElement('li');
        showTimeListItem.classList.add("showtime-container")
        showTimeList.appendChild(showTimeListItem);

        const showTimeDateList = document.createElement('h6');
        showTimeDateList.classList.add("h6-mecury");
        showTimeDateList.innerText = "DATE";

        const showTimeDate = document.createElement('h4');
        showTimeDate.classList = ("show__date")
        showTimeDate.innerText = showTime[i].date;

        const showTimeVenueList = document.createElement('h6');
        showTimeVenueList.classList.add("h6-mecury");
        showTimeVenueList.innerText = "VENUE";

        const showTimeVenue = document.createElement('h4');
        showTimeVenue.classList = ("show__venue");
        showTimeVenue.innerText = showTime[i].venue;

        const showTimeLocationList = document.createElement('h6');
        showTimeLocationList.classList.add("h6-mecury");
        showTimeLocationList.innerText = "LOCATION";

        const showTimeLocation = document.createElement('h4');
        showTimeLocation.classList = ("show__location");
        showTimeLocation.innerText = showTime[i].location;

        const showTimeButton = document.createElement('a');
        showTimeButton.classList.add("ticket-text")
        const linkText = document.createTextNode("my title text");
        showTimeButton.appendChild(linkText);
        showTimeButton.href = "#";
        showTimeButton.innerText = "BUY TICKETS";

        const showTimeDivider = document.createElement('hr');
        showTimeDivider.classList.add("divider")



        showTimeListItem.appendChild(showTimeDateList);
        showTimeListItem.appendChild(showTimeDate);
        showTimeListItem.appendChild(showTimeVenueList);
        showTimeListItem.appendChild(showTimeVenue);
        showTimeListItem.appendChild(showTimeLocationList);
        showTimeListItem.appendChild(showTimeLocation);
        showTimeListItem.appendChild(showTimeButton);
        showTimeListItem.appendChild(showTimeDivider);
    }
}

createShowTimes();