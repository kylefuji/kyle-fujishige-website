from django.shortcuts import render
from django.templatetags.static import static
from django.urls import reverse

# Create your views here.
def home(request):
    body = [
        {"name": "Kyle Fujishige", "brand": True, "tab": "kyle", "icon": static("icons/mouse.svg")},
        {"name": "Home", "brand": False, "tab": "home", "icon": None},
        {"name": "Work Exp.", "brand": False, "tab": "work-exp", "icon": None},
        {"name": "Products", "brand": False, "tab": "projects", "icon": None},
        {"name": "About Me", "brand": False, "tab": "about-me", "icon": None}
    ]
    return render(request, "index.html", {'body': body}) 