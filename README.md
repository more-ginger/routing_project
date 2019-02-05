# routing_project

#Datasets for granular routes - First Visualization
A set of small datasets will be needed in order to create the first visualization.
Here's a sketch of how it should look like in the end:

![This sketch is provisional](/assets/roads-01.png)


The datasets should be:
- 1 common csv file
- 1 topojson file for Here car paths
- 1 topojson file for Gmaps car paths
- 1 topojson file for Bing  car paths
- 1 topojson file for Here PT paths
- 1 topojson file for Gmaps PT paths
- 1 topojson file for Bing  PT paths

The csv file should be structured with the following columns (you will find a fake excel file inside the repo):

ID (unique for each path) || Walk Time(to station) || Travel Time || Walk Time (to destination)

The topojsons should represent all the paths that will be involved in the visualization. As a "properties" they should be carrying the unique ID to make connection with the csv file easier. Inside the folder "Datasets_Structures" you will find an example of Topojson (example.topojson).
