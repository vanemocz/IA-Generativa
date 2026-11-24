# Solicitar los tres números
num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))
num3 = float(input("Ingrese el tercer número: "))

# Comparar el primer y segundo número
if num1 > num2:
    auxiliar = num1
    num1 = num2
    num2 = auxiliar

# Comparar el primer y tercer número
if num1 > num3:
    auxiliar = num1
    num1 = num3
    num3 = auxiliar

# Comparar el segundo y tercer número
if num2 > num3:
    auxiliar = num2
    num2 = num3
    num3 = auxiliar

# Mostrar los números ordenados
print("Números ordenados de menor a mayor:")
print(num1, num2, num3)