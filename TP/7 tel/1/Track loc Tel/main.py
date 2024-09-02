import phonenumbers
import folium
from myphone import number

from phonenumbers import geocoder

pepnumber = phonenumbers.parse(number)
location = geocoder.description_for_number(pepnumber, "fr")
print(location)

from phonenumbers import carrier

service_pro = phonenumbers.parse(number)

print(carrier.name_for_number(service_pro, "fr"))

from opencage.geocoder import OpenCageGeocode

ro_number = phonenumbers.parse("+33783362209", "FR")
carrier.name_for_number(ro_number, "FR")

key = 'a55a548b2e6a41bdbc37dcf895b74c30'

geocoder = OpenCageGeocode(key)
query = str(location)
results = geocoder.geocode(query)

# print(results)

lat = results[0]['geometry']['lat']
lng = results[0]['geometry']['lng']

print(lat,lng)

myMap = folium.Map(location=[46.603354, 1.8883335], zoom_start= 9)
folium.Marker([lat, lng], popup=location).add_to(myMap)

myMap.save("mylocation.html")

# myMap.save("mylocation1.html")