from django.urls import path
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from .views import api_root, CineList, CineDetail, CiudadList, CiudadDetail, GeneroList, GeneroDetail, PeliculaList, PeliculaDetail, ProductoList, ProductoDetail, SalaList, SalaDetail, TiendaList, TiendaDetail, EmpleadoList, EmpleadoDetail

urlpatterns=[
  path('', api_root),
  path('ciudades/', CiudadList.as_view(), name='ciudad-list'),
  path('ciudades/<int:pk>/', CiudadDetail.as_view(), name='ciudad-detail'),
  path('generos/', GeneroList.as_view(), name='genero-list'),
  path('generos/<int:pk>/', GeneroDetail.as_view(), name='genero-detail'),
  path('productos/', ProductoList.as_view(), name='producto-list'),
  path('productos/<int:pk>/', ProductoDetail.as_view(), name='producto-detail'),
  path('tiendas/', TiendaList.as_view(), name='tienda-list'),
  path('tiendas/<int:pk>/', TiendaDetail.as_view(), name='tienda-detail'),
  path('peliculas/', PeliculaList.as_view(), name='pelicula-list'),
  path('peliculas/<int:pk>/', PeliculaDetail.as_view(), name='pelicula-detail'),
  path('cines/', CineList.as_view(), name='cine-list'),
  path('cines/<int:pk>/', CineDetail.as_view(), name='cine-detail'),
  path('salas/', SalaList.as_view(), name='sala-list'),
  path('salas/<int:pk>/', SalaDetail.as_view(), name='sala-detail'),
  path('empleados/', EmpleadoList.as_view(), name='empleado-list'),
  path('empleados/<int:pk>/', EmpleadoDetail.as_view(), name='empleado-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
