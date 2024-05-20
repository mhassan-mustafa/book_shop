from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookSerializers
from .models import Books

from .forms import BookForm


class BooksViewset(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BookSerializers



def book_create_view(request):
    if request.method == 'POST':
        form = BookForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    else:
        form = BookForm()     
    return render(request, 'book_create.html', {'form': form})
