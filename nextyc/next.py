print("boodschappenlijst")
vara = input("Wat zijn de boodschappen? ")

file = open("/Users/d.nok/projects/Learning/nextyc/boodschappenlijstje.txt", "a")
file.write(vara + "\n")
file.close()