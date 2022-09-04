from django.db import models

# Create your models here.

class Ciudad(models.Model):
  nombre = models.CharField(max_length=50, blank=False, null=False)
  departamento = models.CharField(max_length=50, blank=False, null=False)

class Genero(models.Model):
  nombre = models.CharField(max_length=50, blank=False, null=False)

class Producto(models.Model):
  nombre = models.CharField(max_length=50, blank=False, null=False)
  precio = models.IntegerField(blank=False, null=False)
  
class Tienda(models.Model):
  producto = models.ForeignKey(Producto, on_delete=models.PROTECT)

class Pelicula(models.Model):
  titulo = models.CharField(max_length=50, blank=False, null=False)
  genero = models.ForeignKey(Genero, on_delete=models.PROTECT)
  año = models.IntegerField(blank=False, null=False)
  duracion = models.IntegerField(blank=False, null=False)
  descripcion = models.CharField(max_length=100, blank=False, null=False)
  fecha_estreno = models.DateField(blank=False, null=False)
  clasificacion = models.CharField(max_length=50, blank=False, null=False)

class Cine(models.Model):
  nombre = models.CharField(max_length=50, blank=False, null=False)
  ciudad = models.ForeignKey(Ciudad, on_delete=models.PROTECT)
  direccion = models.CharField(max_length=50, blank=False, null=False)
  telefono = models.BigIntegerField(blank=False, null=False)
  hora_apertura = models.DateField(blank=False, null=False)
  hora_cierre = models.DateField(blank=False, null=False)
  tienda = models.OneToOneField(Tienda, on_delete=models.PROTECT)

class Sala(models.Model):
  nombre = models.CharField(max_length=50, blank=False, null=False)
  cine = models.ForeignKey(Cine, on_delete=models.PROTECT)
  capacidad = models.IntegerField(blank=False, null=False)
  pelicula = models.ForeignKey(Pelicula, on_delete=models.PROTECT)
  hora_funcion = models.DateField(blank=False, null=False)

class Empleado(models.Model):
  nombre = models.CharField(max_length=50, blank=False, null=False)
  apellidos = models.CharField(max_length=50, blank=False, null=False)
  direccion = models.CharField(max_length=50, blank=False, null=False)
  telefono = models.BigIntegerField(blank=False, null=False)
  fecha_nacimiento = models.DateField(blank=False, null=False)
  usuario = models.CharField(max_length=50, blank=False, null=False)
  contraseña = models.CharField(blank=False, null=False)