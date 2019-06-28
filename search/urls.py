from django.urls import path,include

from django.contrib import admin
from search.views import (searchposts)

urlpatterns = [
    path('',searchposts , name='searchposts',),


]
