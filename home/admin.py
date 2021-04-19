from django.contrib import admin

# Register your models here.
from .models import Post, NavBarItem

admin.site.register(Post)
admin.site.register(NavBarItem)