from django.urls import path
from . import views
urlpatterns=[
    path('',views.index,name='index'),
    path('reserve',views.reserve,name='reserve'),
    path('why_powertree', views.why_powertree, name='why_powertree'),
    path('aboutus',views.aboutus, name="aboutus"),
    path("whats_new", views.whats_new, name="whats_new"),
    path("product", views.product, name="product"),
    path('project',views.project, name="project"),
    path('project/<int:pk>',views.project_details,name='project_detail'),
    path('whats_new/<int:pk>',views.read_blog,name='blog'),
]