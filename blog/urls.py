from django.urls import path,include
from . import views
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('post/', views.post_list, name='post_list'),
    path('', views.post_list, name='post_list'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/new/', views.post_new, name='post_new'),
    path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),    
    path('accounts/', include('django.contrib.auth.urls')),
    path('post/<int:pk>/delete/', views.post_delete, name='post_delete'),
]
