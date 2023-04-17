from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
import os

def calculator(request):
    return render(request, 'calculator.html')

def rooftop_calculator(request):
    return render(request, 'rooftop_calculator.html')

def tree_calculator(request):
    return render(request, 'tree_calculator.html')

def appliance_calculator(request):
    return render(request, 'appliance_calculator.html')