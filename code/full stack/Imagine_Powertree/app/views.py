from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth.models import auth,User
from django.contrib import messages
from datetime import datetime
from django.urls import reverse
import os
from django.conf import settings
import random
# Create your views here.

def index(request):
    return render(request, 'index.html')

def reserve(request):
    return render(request, 'reserve.html')

def why_powertree(request):
    return render(request, 'why_powertree.html')

def aboutus(request):
    return render(request, 'aboutus.html')

def whats_new(request):
    return render(request, "whats_new.html")

def product(request):
    return render(request, "product.html")

def project(request):
    return render(request, "project.html")