import math

#funcion de insertar un nombre y que te de la bienvenida
def bienvenida(nombre):
    print(f"Bienvenido, {nombre}")
nombreusuario=input("Ingrese su nombre: ")
bienvenida(nombreusuario)
# funcion de hallar la circunferencia de un circulo
def area_circulo(radio):
    return math.pi*radio**2
radioCirculo=float(input("Ingrese el radio del círculo: "))
print(f" el  area del circulo es {area_circulo (radioCirculo)}")


# funcion para hacer un descuento
def descuento(precio, descuento=10):
    return precio-(precio*descuento/100)

precioing=float(input("Ingrese el precio del producto: "))
descuentopor=float(input("Ingrese el descuento: ") or 10)
print(f" el precio con descuento es {descuento(precioing, descuentopor)}")