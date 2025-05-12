# Escribir una función que pida un número entero entre 1 y 10 y
# guarde en un fichero con el nombre tabla-n.txt la tabla de 
# multiplicar de ese número, done n es el número introducido.

# def recibeEntero(numero):
#     if numero < 1 or numero > 10:
#         raise ValueError("El número debe estar entre 1 y 10")
#     else:
#         archivo = "tabla" + str(numero) + ".txt"
#         f = open(archivo, "w")
#         for i in range(1, 11):
#             f.write(str(numero) + " x " + str(i) + " = " + str(numero * i) + "\n")
#         f.close()
# numeroing = int(input("Ingrese un número entre 1 y 10: "))
# recibeEntero(numeroing)


# Escribir una función que pida un número entero entre 1 y 10, lea el fichero
# tabla-n.txt con la tabla de multiplicar de ese número, done n es el número
# introducido, y la muestre por pantalla. Si el fichero no existe debe mostrar
# un mensaje por pantalla informando de ello.    


# Escribir una función que pida dos números n y m entre 1 y 10, lea el fichero
# tabla-n.txt con la tabla de multiplicar de ese número, y muestre por pantalla
# la línea m del fichero. Si el fichero no existe debe mostrar un mensaje por 
# pantalla informando de ello.




# Escribir un programa que acceda a un fichero de internet mediante su url y 
# muestre por pantalla el número de palabras que contiene.
def leerFichero(url):
    from urllib import request
    from urllib.error import URLError
    try:
        archivo = request.urlopen(url)
    except URLError:
        print("la direccion de la URL no es correcta")
    else:
        contenido = archivo.read()
        print ("el numero de palabras es: ", len(contenido.split()))
leerFichero("https://www.gutenberg.org/files/1342/1342-0.txt")