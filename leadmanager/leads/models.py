from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=10)
    email = models.EmailField(max_length=30, unique=True)
    message = models.CharField(max_length=100, blank=True)
    created_at =models.DateTimeField(auto_now_add=True)
