from django.db import models
from .rols import rol

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
  productos = models.ManyToManyField(Producto)

class Pelicula(models.Model):
  titulo = models.CharField(max_length=50, blank=False, null=False)
  # generos = models.ForeignKey(Genero, on_delete=models.PROTECT)
  generos = models.ManyToManyField(Genero)
  portada = models.ImageField(blank=False, default='', upload_to='portada')
  # año = models.IntegerField(blank=False, null=False)
  duracion = models.IntegerField(blank=False, null=False)
  descripcion = models.CharField(max_length=100, blank=False, null=False)
  # fecha_estreno = models.DateField(blank=False, null=False)
  clasificacion = models.CharField(max_length=50, blank=False, null=False)

class Cine(models.Model):
  nombre = models.CharField(max_length=50, blank=False, null=False)
  ciudad = models.ForeignKey(Ciudad, on_delete=models.PROTECT)
  direccion = models.CharField(max_length=50, blank=False, null=False)
  # hora_apertura = models.TimeField(format=TIME_INPUT_FORMATS, input_formats=None, auto_now=False, auto_now_add=False)
  # hora_cierre = models.TimeField(format=TIME_INPUT_FORMATS, input_formats=None, auto_now=False, auto_now_add=False)
  tienda = models.OneToOneField(Tienda, on_delete=models.PROTECT)

class Sala(models.Model):
  nombre = models.CharField(max_length=50, blank=False, null=False)
  cine = models.OneToOneField(Cine, on_delete=models.PROTECT)
  capacidad = models.IntegerField(blank=False, null=False)

class Funcion(models.Model):
  sala = models.ForeignKey(Sala, on_delete=models.PROTECT)
  # hora_funcion = models.TimeField(auto_now=False, auto_now_add=False, default='')
  pelicula = models.ForeignKey(Pelicula, on_delete=models.PROTECT)

class Usuario(models.Model):
  email = models.CharField(max_length=50, blank=False, null=False)
  contraseña = models.CharField(max_length=50, blank=False, null=False)
  rol = models.CharField(max_length=50, choices=rol, default='CLIENT', blank=False, null=False)