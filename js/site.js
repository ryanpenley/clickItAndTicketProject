var events = [{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 240000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 250000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 257000,
    date: "06/01/2019",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 130000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 140000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 150000,
    date: "06/01/2019",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 40000,
    date: "06/01/2017",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 45000,
    date: "06/01/2018",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 50000,
    date: "06/01/2019",
  },
]

function buildDropDown() {
    // get the dropdown menu from the page
    let dropdownMenu = document.getElementById('eventDropDown');
    // empty the innerHTML to ensure it is clean
    dropdownMenu.innerHTML = '';

    // get our events
    let currEvents = events;

    // pull out JUST the city names
    let eventCities = currEvents.map( (event) => event.city );
    // filter the cities to only DISTINCT city names
    let distinctCities = [...new Set(eventCities)];

    // grabbing the template from the HTML file
    const template = document.getElementById('dropdownItemTemplate');


    // copy the template
    let dropdownTemplateNode = document.importNode(template.content, true);
    // get the <a> tag from the template copy
    let menuItem = dropdownTemplateNode.querySelector('a');
    // change the text
    menuItem.textContent = 'All Cities';
    menuItem.setAttribute("data-string", "All");

    // add item to the page
    dropdownMenu.appendChild(menuItem);

    for(let i = 0; i < distinctCities.length; i++){
        let cityMenuItem = document.importNode(template.content, true);
        let cityButton = cityMenuItem.querySelector('a');

        cityButton.textContent = distinctCities[i];
        cityButton.setAttribute("data-string", distinctCities[i]);

        dropdownMenu.appendChild(cityMenuItem);
    }

    displayStats(currEvents);
    displayEventsData(currEvents);
}

function displayStats(eventsArray) {
    let stats = calculateStats(eventsArray)


    document.getElementById('total').textContent = stats.total.toLocaleString();
    document.getElementById('average').textContent = stats.averageAttendance.toLocaleString("en-US", {maximumFractionDigits: 0, minimumFractionDigits: 0});
    document.getElementById('most').textContent = stats.maximumAttendance.toLocaleString();
    document.getElementById('least').textContent = stats.minimumAttendance.toLocaleString();
}

function calculateStats(eventsArray) {

    let sum = 0;
    let avg = 0; 
    let max = eventsArray[0].attendance;
    let min = eventsArray[0].attendance;

    for (let index = 0; index < eventsArray.length; index++) {
        let currentEvent = eventsArray[index];

        sum = sum + currentEvent.attendance;

        if (currentEvent.attendance > max) {
            max = currentEvent.attendance;
        }
        if (currentEvent.attendance < min) {
            min = currentEvent.attendance;
        }
    }

    avg = sum / eventsArray.length;

    let stats = {
        total: sum,
        averageAttendance: avg,
        minimumAttendance: min,
        maximumAttendance: max
    }

    return stats;

}

function displayEventsData(eventsArray) {
    let tableBody = document.getElementById('eventTableBody');
    const tableRowTemplate = document.getElementById('eventTableRowTemplate');

    tableBody.innerHTML = '';

    for (let i = 0; i < eventsArray.length; i++) {
        let eventRow = document.importNode(tableRowTemplate.content, true);
        let currentEvent = eventsArray[i];


        let tableCells = eventRow.querySelectorAll('td');

        tableCells[0].textContent = currentEvent.event;
        tableCells[1].textContent = currentEvent.city;
        tableCells[2].textContent = currentEvent.state;
        tableCells[3].textContent = currentEvent.attendance;
        tableCells[4].textContent = currentEvent.date;

        tableBody.appendChild(eventRow);
    }
}