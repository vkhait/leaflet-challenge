# leaflet-challenge
Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, I have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

To visualise the Earthquake Data, I did the following steps:


To get the dataset:
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed Links to an external site. page and choose a dataset to visualize. 

The dataset I chose was Earthquakes in the last day and you can find the data by followiong this link: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson

I then used the URL of this JSON to pull in the data for the visualization.

The next steps:

Imported and visualized the data by doing the following:

Using Leaflet, I created a map that plots all the earthquakes from the dataset based on their longitude and latitude.
The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

I included popups that provide additional information about the earthquake when its associated marker is clicked. The information the pop up provides is the magnitude of the eartquake and the location.
I created a legend that will provides context for the map data, for the legend I used the depth parameter that defines the color of the markers.



