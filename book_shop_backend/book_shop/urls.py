from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from books.views import *

router = DefaultRouter()
router.register('', BooksViewset, basename='book_viewset')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('create/', book_create_view, name="create_book"),
    path('api/', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
