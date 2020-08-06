from django.urls import include, path

from . import views

urlpatterns = [
    path('app_two', views.index)
]
