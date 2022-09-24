from django.urls import path, include
from .views import CiudadViewSet, GeneroViewSet, ProductoViewSet, TiendaViewSet, PeliculaViewSet, CineViewSet, SalaViewSet, FuncionViewSet, UsuarioViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("ciudades", CiudadViewSet)
router.register("generos", GeneroViewSet)
router.register("productos", ProductoViewSet)
router.register("tiendas", TiendaViewSet)
router.register("peliculas", PeliculaViewSet)
router.register("cines", CineViewSet)
router.register("salas", SalaViewSet)
router.register("funciones", FuncionViewSet)
router.register("usuarios", UsuarioViewSet)

urlpatterns = router.urls

urlpatterns = [
  path("", include(router.urls))
]