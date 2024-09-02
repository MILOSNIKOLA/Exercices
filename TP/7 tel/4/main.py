import phonenumbers
from test import number

from phonenumbers import geocoder

ch_nmber = phonenumbers.parse(number, "FR")
print(geocoder.description_for_number(ch_nmber, "fr"))

from phonenumbers import carrier
service_nmber = phonenumbers.parse(number, "FR")
print(carrier.name_for_number(service_nmber,"en"))

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

myMap = folium.Map(location=[lat, lng], zoom_start= 9)
folium.Marker([lat, lng], popup=location).add_to(myMap)

myMap.save("mylocation.html")

# myMap.save("mylocation1.html")