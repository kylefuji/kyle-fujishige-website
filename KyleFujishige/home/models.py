from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    imageURLs = models.TextField(null=True, blank=True)
    videoURLs = models.TextField(null=True, blank=True)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

