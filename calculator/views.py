from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
import os
from django.contrib import messages
from .models import calculator_query 

def calculator(request):
    return render(request, 'calculator.html')

def rooftop_calculator(request):
    return render(request, 'rooftop_calculator.html')

def tree_calculator(request):
    return render(request, 'tree_calculator.html')

def appliance_calculator(request):
    return render(request, 'appliance_calculator.html')

def create(request):
    if request.method == 'POST':
        contact_no = request.POST.get('phone_number')
        print(contact_no)
        new_query = calculator_query(contact = contact_no)
        new_query.save()
    return render(request, 'tree_calculator.html')