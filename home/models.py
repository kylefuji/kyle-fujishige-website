from django.db import models

TYPE_CHOICES  = {
    ("home", "home"),
    ("about-me", "about me"),
    ("work-exp", "work experience"),
    ("projects", "projects"),
}

SIZE_CHOICES  = {
    ("is-small", "small padding"),
    ("is-medium", "medium padding"),
    ("is-large", "large padding"),
}

class Post(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    type = models.CharField(max_length=200, choices=TYPE_CHOICES)
    size = models.CharField(max_length=50, default="is-medium", choices=SIZE_CHOICES)
    imageUrl = models.CharField(max_length=200, null=True, blank=True)
    url = models.CharField(max_length=200, null=True, blank=True)
    urlDescription = models.CharField(max_length=200, null=True, blank=True)

class NavBarItem(models.Model):
    name = models.CharField(max_length=50)
    brand = models.BooleanField(default=False)
    tab = models.CharField(max_length=50)
    icon = models.CharField(max_length=200, null=True, blank=True)