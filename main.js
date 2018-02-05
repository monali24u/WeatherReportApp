var dailylist;
var currentlylist;
var hourlylist;
var minutelylist;

function useInputData()
{
  var Longitude = document.getElementById("longitude").value;
  var Latitude = document.getElementById("latitude").value;

  console.log("Longitude" + Longitude);
  var Key = "1f9a5eedd4211ec9f965223be81f2020"
  var Url = "https://api.darksky.net/forecast/" + Key +"/"+Longitude + "," + Latitude + "?callback=?";

  dailylist = document.createElement('ui');
  currentlylist = document.createElement('ui');
  hourlylist = document.createElement('ui');
  minutelylist = document.createElement('ui');

  $.getJSON(Url, function(fetchedData){

    //Get currently
      ParseCurrently(fetchedData.currently);

    //GetDaily
      ParseDaily(fetchedData.daily);

    //Get Hourly
      ParseHourly(fetchedData.hourly);

    //Get Minute
      ParseMinutely(fetchedData.minutely);

       console.log(fetchedData);
    });

    document.getElementById("dList").appendChild(dailylist);
    document.getElementById("cList").appendChild(currentlylist);
    document.getElementById("hList").appendChild(hourlylist);
    document.getElementById("mList").appendChild(minutelylist);
}

function ParseDaily(daily)
{
  var length = daily.data.length;
  var final = new Array();

  for(var i=0; i<length; i++)
  {
      var result = new Array();
      result.push("Day: - " + (i + 1));
      result.push("apparentTemperatureHigh:-  " + daily.data[i].apparentTemperatureHigh);
      result.push("apparentTemperatureHighTime:-  "+daily.data[i].apparentTemperatureHighTime);
      result.push("apparentTemperatureLow:-  "+ daily.data[i].apparentTemperatureLow);
      result.push("apparentTemperatureLowTime:-  "+daily.data[i].apparentTemperatureLowTime);
      result.push("apparentTemperatureMax:-  "+daily.data[i].apparentTemperatureMax);
      result.push("apparentTemperatureMaxTime:-  "+daily.data[i].apparentTemperatureMaxTime);
      result.push("apparentTemperatureMin:-  "+daily.data[i].apparentTemperatureMin);
      result.push("apparentTemperatureMinTime:-  "+daily.data[i].apparentTemperatureMinTime);
      result.push("cloudCover:-  "+daily.data[i].cloudCover);
      result.push("dewPoint:-  "+daily.data[i].dewPoint);
      result.push("humidity:-  "+daily.data[i].humidity);
      result.push("icon:-  "+daily.data[i].icon);
      result.push("moonPhase:-  "+daily.data[i].moonPhase);
      result.push("ozone:-  "+daily.data[i].ozone);
      result.push("precipAccumulation:-  "+daily.data[i].precipAccumulation);
      result.push("precipIntensity:-  "+daily.data[i].precipIntensity);
      result.push("precipIntensityMax:-  "+daily.data[i].precipIntensityMax);
      result.push("precipIntensityMaxTime:- "+daily.data[i].precipIntensityMaxTime);
      result.push("precipProbability:-  "+daily.data[i].precipProbability);
      result.push("precipType:-  "+daily.data[i].precipType);
      result.push("pressure:-  "+daily.data[i].pressure);
      result.push("summary:-  "+daily.data[i].summary);
      result.push("sunriseTime:- "+daily.data[i].sunriseTime);
      result.push("sunsetTime:-  "+daily.data[i].sunsetTime);
      result.push("temperatureHigh:-  "+daily.data[i].temperatureHigh);
      result.push("temperatureHighTime:-  "+daily.data[i].temperatureHighTime);
      result.push("temperatureLow:-  "+daily.data[i].temperatureLow);
      result.push("temperatureLowTime:- "+daily.data[i].temperatureLowTime);
      result.push("temperatureMax:-  "+daily.data[i].temperatureMax);
      result.push("temperatureMaxTime:-  "+daily.data[i].temperatureMaxTime);
      result.push("temperatureMin:-  "+daily.data[i].temperatureMin);
      result.push("time:-  "+daily.data[i].time);
      result.push("uvIndex:- "+daily.data[i].uvIndex);
      result.push("uvIndexTime:-  "+daily.data[i].uvIndexTime);
      result.push("visibility:-  "+daily.data[i].visibility);
      result.push("windBearing:-  "+daily.data[i].windBearing);
      result.push("windGust:-  "+daily.data[i].windGust);
      result.push("windGustTime:- "+daily.data[i].windGustTime);
      result.push("windSpeed:-  "+daily.data[i].windSpeed);
      result.push(" ")  ;
      final.push(result);
   }

   for(var i=0; i<final.length; i++)
   {
     for(var j=0; j<final[0].length; j++)
     {
       var listItem = document.createElement('li');
       var listItemtext = document.createTextNode(final[i][j]);
       listItem.appendChild(listItemtext);
       dailylist.appendChild(listItem);
     }
   }

  }

  function ParseCurrently(currently)
  {
      var result = new Array();
      result.push("apparentTemperature:-  " + currently.apparentTemperature);
      result.push("cloudCover:-  "+currently.cloudCover);
      result.push("dewPoint:-  "+ currently.dewPoint);
      result.push("humidity:-  "+currently.humidity);
      result.push("icon:-  "+currently.icon);
      result.push("nearestStormBearing:-  "+currently.nearestStormBearing);
      result.push("nearestStormDistance:-  "+currently.nearestStormDistance);
      result.push("ozone:-  "+currently.ozone);
      result.push("precipIntensity:-  "+currently.precipIntensity);
      result.push("precipProbability:-  "+currently.precipProbability);
      result.push("pressure:-  "+currently.pressure);
      result.push("summary:-  "+currently.summary);
      result.push("temperature:-  "+currently.temperature);
      result.push("time:-  "+currently.time);
      result.push("uvIndex:-  "+currently.uvIndex);
      result.push("visibility:-  "+currently.visibility);
      result.push("windBearing:-  "+currently.windBearing);
      result.push("windGust:- "+currently.windGust);
      result.push("windSpeed:-  "+currently.windSpeed);


  for(var i=0; i<result.length; i++)
  {
    var listItem = document.createElement('li');
    var listItemtext = document.createTextNode(result[i]);
    listItem.appendChild(listItemtext);
    currentlylist.appendChild(listItem);
  }

}

function ParseHourly(hourly)
{
  var final = new Array();
  for(var i=0; i < hourly.data.length; i++)
  {
    var result = new Array();
    result.push("Hour: - " + (i + 1));
    result.push("apparentTemperature:-  " + hourly.data[i].apparentTemperature);
    result.push("cloudCover:-  "+hourly.data[i].cloudCover);
    result.push("dewPoint:-  "+ hourly.data[i].dewPoint);
    result.push("humidity:-  "+hourly.data[i].humidity);
    result.push("icon:-  "+hourly.data[i].icon);
    result.push("ozone:-  "+hourly.data[i].ozone);
    result.push("precipIntensity:-  "+hourly.data[i].precipIntensity);
    result.push("precipProbability:-  "+hourly.data[i].precipProbability);
    result.push("pressure:-  "+hourly.data[i].pressure);
    result.push("summary:-  "+hourly.data[i].summary);
    result.push("temperature:-  "+hourly.data[i].temperature);
    result.push("time:-  "+hourly.data[i].time);
    result.push("uvIndex:-  "+hourly.data[i].uvIndex);
    result.push("visibility:-  "+hourly.data[i].visibility);
    result.push("windBearing:-  "+hourly.data[i].windBearing);
    result.push("windGust:- "+hourly.data[i].windGust);
    result.push("windSpeed:-  "+hourly.data[i].windSpeed);
    result.push(" ");
    final.push(result);
  }

  for(var i=0; i<final.length; i++)
  {
    for(var j=0; j<final[i].length; j++)
    {
      var listItem = document.createElement('li');
      var listItemtext = document.createTextNode(final[i][j]);
      listItem.appendChild(listItemtext);
      hourlylist.appendChild(listItem);
    }
  }

}

function ParseMinutely(minutely)
{
  var final = new Array();
  for(var i=0; i < minutely.data.length; i++)
  {
    var result = new Array();
    result.push("Minute: - " + (i + 1));
    result.push("precipIntensity:-  " + minutely.data[i].precipIntensity);
    result.push("precipProbability:-  "+minutely.data[i].precipProbability);
    result.push("time:-  "+ minutely.data[i].time);
    result.push(" ");
    final.push(result);
  }

  for(var i=0; i<final.length; i++)
  {
    for(var j=0; j<final[i].length; j++)
    {
      var listItem = document.createElement('li');
      var listItemtext = document.createTextNode(final[i][j]);
      listItem.appendChild(listItemtext);
      minutelylist.appendChild(listItem);
    }
  }
}
