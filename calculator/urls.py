from django.urls import path
from . import views
urlpatterns=[
    path("",views.calculator,name="calculator"),
    path("rooftop",views.rooftop_calculator,name="rooftop_calculator"),
    path("tree",views.tree_calculator,name="tree_calculator"),
    path("appliances",views.appliance_calculator,name="appliance_calculator"),
    
]