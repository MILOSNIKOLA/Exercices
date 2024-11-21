

# import tkinter
# import tkintermapview
# import phonenumbers
# import opencage

# from key import key

# from phonenumbers import geocoder
# from phonenumbers import carrier

# from tkinter import *
# from tkinter import messagebox

# from opencage.geocoder import OpenCageGeocode

# root = tkinter.Tk()
# root.geometry("500x500")

# Label1 = Label(text="Hunter")
# Label1.pack()

# def getResult():
#     num = number.get("1.0", "end-1c")  # Corriger le texte récupéré
#     num1 = phonenumbers.parse(num)

#     location = geocoder.description_for_number(num1, "fr")
#     service_provider = carrier.name_for_number(num1, "fr")

#     # Utilisation de l'API OpenCageGeocode pour obtenir la latitude et la longitude
#     ocg = OpenCageGeocode(key)
#     query = str(location)
#     results = ocg.geocode(query)

#     lat = results[0]['geometry']['lat']
#     lng = results[0]['geometry']['lng']

#         # Créer un LabelFrame pour afficher la carte
#     my_label = LabelFrame(root)
#     my_label.pack(padx=10, pady=10)  # Ajouter des marges autour du LabelFrame

#         # Créer un widget de carte
#     map_widget = tkintermapview.TkinterMapView(my_label, width=450, height=450, corner_radius=0)
#     map_widget.set_position(lat, lng)  # Positionner la carte à la latitude et la longitude obtenues
#         # Afficher les informations dans la zone de résultats
#     map_widget.set_marker(lat, lng, text = "Tel Location")
#     map_widget.set_zoom(10)
#     map_widget.place(relx=0.5, rely=0.5, anchor=tkinter.CENTER)
#     map_widget.pack()
        
        
#     result.insert(END, "Le pays de ce numéro est: " + location)
#     result.insert(END, "\nLe fournisseur SIM de ce numéro est: " + service_provider)

#     result.insert(END, "\nLatitude : " + str(lat))
#     result.insert(END, "\nLongitude : " + str(lng))
#     # else:
#     #     messagebox.showerror("Erreur", "Aucun résultat trouvé pour ce numéro.")

# # Champ pour entrer le numéro de téléphone
# number = Text(height=1)
# number.pack(pady=10)

# # Bouton pour lancer la recherche
# button = Button(text="Search", command=getResult)
# button.pack(pady=10)

# # Zone de texte pour afficher les résultats
# result = Text(height=7)
# result.pack(pady=10)

# root.mainloop()


import tkinter
import tkintermapview
import phonenumbers
import opencage
from key import key
from phonenumbers import geocoder
from phonenumbers import carrier
from tkinter import *
from tkinter import messagebox
from tkinter.ttk import *
from opencage.geocoder import OpenCageGeocode

root = tkinter.Tk()
root.geometry("500x500")

Label1 = Label(text="Hunter")
Label1.pack()

def getResult():
    # Récupérer le numéro de téléphone
    num = number.get("1.0", "end-1c")  # Correction pour obtenir correctement le texte
    if not num:
        messagebox.showerror("Erreur", "Veuillez entrer un numéro de téléphone.")
        return
    
    try:
        num1 = phonenumbers.parse(num)
    except phonenumbers.phonenumberutil.NumberParseException:
        messagebox.showerror("Erreur", "Le numéro de téléphone est invalide.")
        return

    # Obtenir la localisation et le fournisseur
    location = geocoder.description_for_number(num1, "fr")
    service_provider = carrier.name_for_number(num1, "fr")

    # Utiliser OpenCage pour récupérer les coordonnées
    ocg = OpenCageGeocode(key)
    query = str(location)
    results = ocg.geocode(query)

    if results:
        lat = results[0]['geometry']['lat']
        lng = results[0]['geometry']['lng']
    else:
        messagebox.showerror("Erreur", "Impossible de récupérer les coordonnées.")
        return

    # Créer un LabelFrame pour afficher la carte
    my_label = LabelFrame(root)
    my_label.pack(padx=10, pady=10)  # Ajouter des marges autour du LabelFrame

    # Créer un widget de carte
    map_widget = tkintermapview.TkinterMapView(my_label, width=450, height=450, corner_radius=0)
    map_widget.set_position(lat, lng)  # Positionner la carte à la latitude et la longitude obtenues
    map_widget.set_marker(lat, lng, text="Tel Location")
    map_widget.set_zoom(10)
    map_widget.pack()  # Utilisation de pack() ici, ne pas mélanger avec place()

    # Afficher les résultats dans la zone de texte
    result.delete(1.0, END)  # Effacer les résultats précédents
    result.insert(END, "Le pays de ce numéro est: " + location)
    result.insert(END, "\nLe fournisseur SIM de ce numéro est: " + service_provider)
    result.insert(END, "\nLatitude : " + str(lat))
    result.insert(END, "\nLongitude : " + str(lng))

# Champ pour entrer le numéro de téléphone
number = Text(height=1)
number.pack(pady=10)

# Bouton pour lancer la recherche
button = Button(text="Search", command=getResult)
button.pack(pady=10)

# Zone de texte pour afficher les résultats
result = Text(height=7)
result.pack(pady=10)

root.mainloop()




# import tkinter
# import tkintermapview
# import phonenumbers
# import opencage
# from key import key
# from phonenumbers import geocoder
# from phonenumbers import carrier
# from tkinter import *
# from tkinter import messagebox
# from opencage.geocoder import OpenCageGeocode

# root = tkinter.Tk()
# root.geometry("500x500")

# Label1 = Label(text="Hunter")
# Label1.pack()

# def getResult():
#     # Récupérer le numéro de téléphone
#     num = number.get("1.0", "end-1c")  # Correction pour obtenir correctement le texte
#     if not num:
#         messagebox.showerror("Erreur", "Veuillez entrer un numéro de téléphone.")
#         return
    
#     try:
#         num1 = phonenumbers.parse(num)
#     except phonenumbers.phonenumberutil.NumberParseException:
#         messagebox.showerror("Erreur", "Le numéro de téléphone est invalide.")
#         return

#     # Obtenir la localisation et le fournisseur
#     location = geocoder.description_for_number(num1, "fr")
#     service_provider = carrier.name_for_number(num1, "fr")

#     # Utiliser OpenCage pour récupérer les coordonnées
#     ocg = OpenCageGeocode(key)
#     query = str(location)
#     results = ocg.geocode(query)

#     if results:
#         lat = results[0]['geometry']['lat']
#         lng = results[0]['geometry']['lng']
#     else:
#         messagebox.showerror("Erreur", "Impossible de récupérer les coordonnées.")
#         return

#     # Créer un LabelFrame pour afficher la carte
#     my_label = LabelFrame(root)
#     my_label.pack(padx=10, pady=10)  # Ajouter des marges autour du LabelFrame

#     # Créer un widget de carte
#     map_widget = tkintermapview.TkinterMapView(my_label, width=450, height=450, corner_radius=0)
#     map_widget.set_position(lat, lng)  # Positionner la carte à la latitude et la longitude obtenues
#     map_widget.set_marker(lat, lng, text="Tel Location")
#     map_widget.set_zoom(10)
#     map_widget.pack()  # Utilisation de pack() ici, ne pas mélanger avec place()

#     # Afficher les résultats dans la zone de texte
#     result.delete(1.0, END)  # Effacer les résultats précédents
#     result.insert(END, "Le pays de ce numéro est: " + location)
#     result.insert(END, "\nLe fournisseur SIM de ce numéro est: " + service_provider)
#     result.insert(END, "\nLatitude : " + str(lat))
#     result.insert(END, "\nLongitude : " + str(lng))

# # Champ pour entrer le numéro de téléphone
# number = Text(height=1)
# number.pack(pady=10)

# # Bouton pour lancer la recherche
# button = Button(text="Search", command=getResult)
# button.pack(pady=10)

# # Zone de texte pour afficher les résultats
# result = Text(height=7)
# result.pack(pady=10)

# root.mainloop()


























# import tkinter
# import tkintermapview
# import phonenumbers
# import opencage

# from key import key

# from phonenumbers import geocoder
# from phonenumbers import carrier

# from tkinter import *
# from tkinter import messagebox

# from opencage.geocoder import OpenCageGeocode

# root = tkinter.Tk()
# root.geometry("500x500")

# Label1 = Label(text="Phone Number Tracker")
# Label1.pack()

# def getResult():
#     # Récupérer le texte du widget Text correctement en excluant le caractère de fin de ligne
#     num = number.get("1.0", "end-1c")
    
#     try:
#         # Analyser le numéro de téléphone
#         num1 = phonenumbers.parse(num)
        
#         # Obtenir la localisation du numéro (pays)
#         location = geocoder.description_for_number(num1, "en")
        
#         # Obtenir le fournisseur de service (SIM)
#         service_provider = carrier.name_for_number(num1, "en")
        
#         # Afficher les résultats dans le widget Text de résultats
#         result.delete(1.0, "end")  # Effacer les anciens résultats avant d'afficher les nouveaux
#         result.insert(END, "Le pays de ce numéro est: " + location)
#         result.insert(END, "\nLe fournisseur SIM de ce numéro est: " + service_provider)
        
#         result.insert(END, "\nLatitude est: " + str(lat))
#         result.insert(END, "\nLongitude est: " + str(lng))
#         results = ocg.geocode(query)
        
#         ocg = OpenCageGeocode(key)
#         query = str(location)
        
#         lat = results[0]['geometry']['lat']
#         lng = result[0]['geometry']['lng']

#         my_label = LabelFrame(root)
#         my_label.pack(pack=20)

#         map_widget = tkintermapview.TkinterMapView(my_label, width=450, height=450, corner_radius=0)


#     except phonenumbers.phonenumberutil.NumberParseException:
#         # Si le numéro est invalide
#         messagebox.showerror("Erreur", "Numéro de téléphone invalide!")

# # Création d'un champ Text pour entrer le numéro
# number = Text(height=1, width=30)
# number.pack(pady=10)

# # Bouton pour déclencher la recherche
# button = Button(text="Search", command=getResult)
# button.pack(pady=10)

# # Champ Text pour afficher les résultats
# result = Text(height=5, width=50)
# result.pack(pady=10)

# root.mainloop()

# 16min





# import tkinter
# import phonenumbers
# import opencage

# from key import key

# from phonenumbers import geocoder, carrier

# from tkinter import *
# from tkinter import messagebox


# # Simuler un Service Locator
# class ServiceLocator:
#     def __init__(self):
#         # Dictionnaire pour stocker les services (clé = nom du service, valeur = instance du service)
#         self._services = {}

#     def bind(self, service_name, service_instance):
#         """Lie un service au locator"""
#         self._services[service_name] = service_instance

#     def unbound_services(self):
#         """Retourne les services non liés (qui sont 'None' ou non initialisés)"""
#         return [service for service, instance in self._services.items() if instance is None]

#     def get_service(self, service_name):
#         """Récupère un service lié"""
#         return self._services.get(service_name)


# from opencage.geocoder import OpenCageGeocode

# # Création de l'application Tkinter
# root = tkinter.Tk()
# root.geometry("500x500")

# Label1 = Label(text="Phone Number Tracker")
# Label1.pack()


# # Implémentation du comportement de recherche de numéro
# def getResult():
#     num = number.get("1.0", END).strip()  # Récupère le texte de l'input et enlève les espaces inutiles
#     try:
#         num1 = phonenumbers.parse(num)  # Analyse du numéro

#         location = geocoder.description_for_number(num1, "en")
#         service_provider = carrier.name_for_number(num1, "en")
        
#         ocg = OpenCageGeocode(key)
#         query = str(location)
#         results = ocg.geocode(query)

#         lat = results[0]['geometry']['lat']
#         lng = result[0]['geometry']['lng']

#         # Si le fournisseur de service est inexistant, on met une valeur par défaut
#         if not service_provider:
#             service_provider = "Service provider inconnu"
        
#         # Affichage dans le champ de résultats
#         result.delete(1.0, END)  # Vide la zone de résultat avant de l'actualiser
#         result.insert(END, "Le pays de ce numéro est : " + location)
#         result.insert(END, "\nLe fournisseur de la carte SIM est : " + service_provider)

#         result.insert(END, "\nLatitude est: " + str(lat))
#         result.insert(END, "\nLongitude est: " + str(lng))

#     except phonenumbers.phonenumberutil.NumberParseException:
#         messagebox.showerror("Erreur", "Numéro de téléphone invalide.")  # Affichage d'un message d'erreur

#     # Vérification des services non liés
#     unbound = service_locator.unbound_services()
#     if unbound:
#         messagebox.showinfo("Services non liés", f"Les services suivants ne sont pas liés : {', '.join(unbound)}")
#     else:
#         messagebox.showinfo("Services liés", "Tous les services sont liés.")

# # Initialisation du ServiceLocator
# service_locator = ServiceLocator()

# # Lier des services au locator (par exemple, des services d'API, des connexions de base de données, etc.)
# service_locator.bind("PhoneService", "Service prêt")  # Service lié (ici une valeur fictive)
# service_locator.bind("LocationService", "API de géolocalisation")  # Service lié (ici une valeur fictive)
# service_locator.bind("AnalyticsService", None)  # Service non lié (explicite)

# # Interface graphique
# number = Text(height=1)
# number.pack()

# button = Button(text="Search", command=getResult)
# button.pack(pady=10, padx=100)

# result = Text(height=5)
# result.pack()

# root.mainloop()







# import tkinter
# from phonenumbers import geocoder, carrier, phonenumberutil, parse
# from opencage.geocoder import OpenCageGeocode
# from tkinter import *
# from tkinter import messagebox

# from key import key  # Assurez-vous que votre fichier key.py contient `key = "votre_clé_api"`

# class ServiceLocator:
#     def __init__(self):
#         self._services = {}

#     def bind(self, service_name, service_instance):
#         self._services[service_name] = service_instance

#     def unbound_services(self):
#         return [service for service, instance in self._services.items() if instance is None]

#     def get_service(self, service_name):
#         return self._services.get(service_name)


# root = tkinter.Tk()
# root.geometry("500x500")
# root.title("Localisateur de Numéro de Téléphone")

# Label1 = Label(root, text="Localisateur de Numéro de Téléphone", font=("Arial", 16), pady=10)
# Label1.pack()

# def getResult():
#     num = number.get("1.0", END).strip()

#     try:
#         # Analyse du numéro
#         num1 = parse(num)
#         location = geocoder.description_for_number(num1, "en")
#         service_provider = carrier.name_for_number(num1, "en")

#         # Vérification de la localisation
#         print(f"Localisation détectée : {location}")
#         if not location:
#             messagebox.showerror("Erreur", "Impossible de détecter la localisation du numéro.")
#             return

#         # Géolocalisation avec OpenCage
#         ocg = OpenCageGeocode(key)
#         query = str(location)
#         results = ocg.geocode(query)

#         if not results:
#             messagebox.showerror("Erreur", "Aucun résultat de localisation obtenu. Vérifiez la clé API ou le numéro.")
#             return

#         lat = results[0]['geometry']['lat']
#         lng = results[0]['geometry']['lng']

#         # Fournisseur par défaut si non détecté
#         if not service_provider:
#             service_provider = "Service provider inconnu"

#         # Résultats
#         result.delete(1.0, END)
#         result.insert(END, f"Le pays de ce numéro est : {location}\n")
#         result.insert(END, f"Le fournisseur de la carte SIM est : {service_provider}\n")
#         result.insert(END, f"Latitude : {lat}\n")
#         result.insert(END, f"Longitude : {lng}\n")

#     except phonenumberutil.NumberParseException:
#         messagebox.showerror("Erreur", "Numéro de téléphone invalide.")
#     except Exception as e:
#         messagebox.showerror("Erreur", f"Une erreur est survenue : {e}")

#     unbound = service_locator.unbound_services()
#     if unbound:
#         messagebox.showinfo("Services non liés", f"Les services suivants ne sont pas liés : {', '.join(unbound)}")
#     else:
#         messagebox.showinfo("Services liés", "Tous les services sont liés.")


# service_locator = ServiceLocator()
# service_locator.bind("PhoneService", "Service prêt")
# service_locator.bind("LocationService", "API de géolocalisation")
# service_locator.bind("AnalyticsService", "Service analytique prêt")

# Label(root, text="Entrez le numéro de téléphone :", font=("Arial", 12)).pack(pady=5)
# number = Text(root, height=1, font=("Arial", 12), width=30)
# number.pack(pady=5)

# button = Button(root, text="Rechercher", command=getResult, bg="blue", fg="white", font=("Arial", 12))
# button.pack(pady=10)

# Label(root, text="Résultat :", font=("Arial", 12)).pack(pady=5)
# result = Text(root, height=10, font=("Arial", 12), width=50)
# result.pack(pady=5)

# root.mainloop()





















































