from .models import Cine, Sala, Ciudad, Genero, Producto, Pelicula, Tienda
from rest_framework import serializers

class CiudadSerializer(serializers.ModelSerializer):
  class Meta:
    model = Ciudad
    fields = ('id',
              'nombre',
              'departamento')

class GeneroSerializer(serializers.ModelSerializer):
  class Meta:
    model = Genero
    fields = ('id',
              'nombre')

class ProductoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Producto
    fields = ('id',
              'nombre',
              'precio')

class TiendaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tienda
    fields = ('id'
              'producto')
    depth = 1

class PeliculaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pelicula
    fields = ('id',
              'titulo',
              'genero',
              'año',
              'duracion',
              'descripcion',
              'fecha_estreno',
              'clasificacion')
    depth = 1

class CineSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cine
    fields = ('id'
              'nombre',
              'ciudad',
              'direccion',
              'telefono',
              'hora_apertura',
              'hora_cierre',
              'tienda')
    depth = 1

class SalaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Sala,
    fields = ('id',
              'nombre',
              'cine',
              'capacidad',
              'pelicula',
              'hora_funcion')
    depth = 1