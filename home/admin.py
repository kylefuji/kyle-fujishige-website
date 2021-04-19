from django.contrib import admin

# Register your models here.
from .models import Post, NavBarItem

class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 
                    'title',
                    'content',
                    'type',
                    'size',
                    'imageUrl',
                    'url',
                    'urlDescription')

class NavBarItemAdmin(admin.ModelAdmin):
    list_display = ('id',
                    'name', 
                    'brand', 
                    'tab', 
                    'icon')

admin.site.register(Post, PostAdmin)
admin.site.register(NavBarItem, NavBarItemAdmin)