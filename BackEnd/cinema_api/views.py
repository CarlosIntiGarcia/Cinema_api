from rest_framework import viewsets, response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Ciudad, Cine, Genero, Pelicula, Producto, Sala, Tienda, Usuario, Funcion
from .serializers import CineSerializer, CiudadSerializer, GeneroSerializer, PeliculaSerializer, ProductoSerializer, SalaSerializer, TiendaSerializer, UsuarioSerializer, FuncionSerializer

#Controladores de Ciudad
class CiudadViewSet(viewsets.ModelViewSet):
  queryset = Ciudad.objects.all()
  serializer_class = CiudadSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['departamento']

class GeneroViewSet(viewsets.ModelViewSet):
  queryset = Genero.objects.all()
  serializer_class = GeneroSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['nombre']

class ProductoViewSet(viewsets.ModelViewSet):
  queryset = Producto.objects.all()
  serializer_class = ProductoSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['nombre', 'precio']

class TiendaViewSet(viewsets.ModelViewSet):
  queryset = Tienda.objects.all()
  serializer_class = TiendaSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['productos']

class PeliculaViewSet(viewsets.ModelViewSet):
  queryset = Pelicula.objects.all()
  serializer_class = PeliculaSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['titulo', 'generos', 'clasificacion']

class CineViewSet(viewsets.ModelViewSet):
  queryset = Cine.objects.all()
  serializer_class = CineSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['nombre', 'ciudad']

class SalaViewSet(viewsets.ModelViewSet):
  queryset = Sala.objects.all()
  serializer_class = SalaSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['nombre', 'cine', 'capacidad']

class FuncionViewSet(viewsets.ModelViewSet):
  queryset = Funcion.objects.all()
  serializer_class = FuncionSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['sala', 'pelicula']

class UsuarioViewSet(viewsets.ModelViewSet):
  queryset = Usuario.objects.all()
  serializer_class = UsuarioSerializer
  filter_backends=[DjangoFilterBackend]
  filterset_fields = ['email', 'rol']