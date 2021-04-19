from django.contrib import admin

# Register your models here.
from .models import Post, NavBarItem

class PostAdmin(admin.ModelAdmin):
    list_display = ('title',
                    'content',
                    'type',
                    'size',
                    'imageUrl',
                    'url',
                    'urlDescription')

class NavBarItemAdmin(admin.ModelAdmin):
    list_display = ('name', 
                    'brand', 
                    'tab', 
                    'icon')

admin.site.register(Post)
admin.site.register(NavBarItem)