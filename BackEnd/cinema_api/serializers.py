from .models import Cine, Sala, Ciudad, Genero, Producto, Pelicula, Tienda, Usuario, Funcion
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
  productos = ProductoSerializer(many=True)
  
  class Meta:
    model = Tienda
    fields = ('id',
              'productos')
              # 'productos_pk')
    depth = 1

  def create(self, validated_data):
    producto_data = validated_data.pop('productos')
    tienda = Tienda.objects.create(**validated_data)
        
    for producto in producto_data:
      tienda.productos.create(**producto)
    return tienda

class PeliculaSerializer(serializers.ModelSerializer):
  generos = GeneroSerializer(many=True)
  
  class Meta:
    model = Pelicula
    fields = ('id',
              'titulo',
              'generos',
              'portada',
              'duracion',
              'descripcion',
              'clasificacion')
  
  def create(self, validated_data):
    genero_data = validated_data.pop('generos')
    pelicula = Pelicula.objects.create(**validated_data)

    for genero in genero_data:
      Genero.objects.create(**genero, pelicula=pelicula)
    return pelicula

class CineSerializer(serializers.ModelSerializer):
  ciudad_pk = serializers.PrimaryKeyRelatedField(queryset=Ciudad.objects.all(), source='ciudad', write_only=True)
  tienda_pk = serializers.PrimaryKeyRelatedField(queryset=Tienda.objects.all(), source='tienda', write_only=True)

  class Meta:
    model = Cine
    fields = ('id',
              'nombre',
              'ciudad',
              'ciudad_pk',
              'direccion',
              'telefono',
              # 'hora_apertura',
              # 'hora_cierre',
              'tienda',
              'tienda_pk')
    depth = 1

class SalaSerializer(serializers.ModelSerializer):
  cine_pk = serializers.PrimaryKeyRelatedField(queryset=Cine.objects.all(), source='cine', write_only=True)

  class Meta:
    model = Sala
    fields = ('id',
              'nombre',
              'cine',
              'cine_pk',
              'capacidad')
    depth = 1

class FuncionSerializer(serializers.ModelSerializer):
  sala_pk = serializers.PrimaryKeyRelatedField(queryset=Sala.objects.all(), source='sala', write_only=True)
  pelicula_pk = serializers.PrimaryKeyRelatedField(queryset=Pelicula.objects.all(), source='pelicula', write_only=True)

  class Meta:
    model = Funcion
    fields = ('id',
              'sala',
              'sala_pk',
              # 'hora_funcion',
              'pelicula',
              'pelicula_pk')
    depth = 1

class UsuarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Usuario
    fields = ('id',
              'email',
              'contraseña',
              'rol')