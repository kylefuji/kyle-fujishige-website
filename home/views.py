from django.shortcuts import render
from .models import NavBarItem, Post
from django.forms.models import model_to_dict
import json

# Create your views here.
def home(request):
    
    nav_query_items = NavBarItem.objects.all().order_by('id')
    post_query_items = Post.objects.all().order_by('id')
    nav_data = []
    home_posts = []
    about_me_posts = []
    project_posts = []
    work_exp_posts = []
    for item in nav_query_items:
        nav_data.append(model_to_dict(item))
    
    for item in post_query_items:
        post = model_to_dict(item)
        if post['type'] == 'home':
            home_posts.append(model_to_dict(item))
        elif post['type'] == 'work-exp':
            work_exp_posts.append(model_to_dict(item))
        elif post['type'] == 'about-me':
            about_me_posts.append(model_to_dict(item))
        elif post['type'] == 'projects':
            project_posts.append(model_to_dict(item))

    return render(request, "index.html", {'navData': nav_data, 'homePosts': home_posts, 'aboutMePosts': about_me_posts, 'projectPosts': project_posts, 'workExpPosts': work_exp_posts}) 