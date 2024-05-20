from django.db import models

class Books(models.Model):
    name = models.CharField(max_length=50, unique=True)
    author = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2, max_digits=6)
    image = models.ImageField(upload_to='uploads/images')
    
    def __str__(self):
        return self.name
    