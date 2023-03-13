from django.urls import path
from . import views
urlpatterns=[
    path('',views.index,name='index'),
    path('reserve',views.reserve,name='reserve'),
    path('why_powertree', views.why_powertree, name='why_powertree'),
    path('aboutus',views.aboutus, name="aboutus"),
    path("whats_new", views.whats_new, name="whats_new"),
    path("product", views.product, name="product"),
    path('product/<int:pk>', views.product_details, name='product_details'),
    path('project',views.project, name="project"),
    path('projects/<int:pk>',views.project_details,name='project_detail'),
    path('whats_new/<int:pk>',views.read_blog,name='blog'),
    path('aboutus/our_team',views.our_team,name="team"),
]