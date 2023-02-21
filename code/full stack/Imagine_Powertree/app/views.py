from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth.models import auth,User
from django.contrib import messages
from datetime import datetime
from django.urls import reverse
from .models import reserve as reserve_model,why_powertree as why_model,team, products,advisory_board,image_gallery,key_clients,supported_by,projects
import os
from django.conf import settings
import random
# Create your views here.

def index(request):
    images=image_gallery.objects.all()
    clients = key_clients.objects.all()
    supported = supported_by.objects.all()
    return render(request, 'index.html',{"images":images , "clients" :clients, "supported":supported})

def reserve(request):
    if request.method=="POST":
        i_am = request.POST["i_am"]
        name = request.POST["full-name"]
        email = request.POST["email"]
        contact = request.POST["number"]
        address_1 = request.POST["address_1"]
        address_2 = request.POST["address_2"]
        state = request.POST["state"]
        comment = request.POST["comment"]

        if( '@' not in email or '.com' not in email ):
            messages.info(request, 'please enter proper email')
            return redirect('reserve')

        
        if (not(contact[1:].isnumeric())):
            messages.info(request, contact)
            return redirect('reserve')

        elif('+' not in contact):
            contact="+"+contact
        
        data = reserve_model.objects.create(i_am=i_am, name=name, email=email, contact= contact, address_ln1=address_1, address_ln2=address_2, state=state, comment=comment)
        data.save()
        return redirect('reserve')

    return render(request, 'reserve.html')

def why_powertree(request):
    contents = why_model.objects.all()
    return render(request, 'why_powertree.html', {'contents': contents})

def aboutus(request):
    all_team = team.objects.all()
    advisors = advisory_board.objects.all()
    return render(request, 'aboutus.html',{"all_team":all_team, "advisors":advisors})

def whats_new(request):
    return render(request, "whats_new.html")

def product(request):
    product=products.objects.all()
    return render(request, "product.html", {'products': product})

def project(request):
    images = image_gallery.objects.all()
    all_projects = projects.objects.all()
    top_two = projects.objects.all()[:2]
    return render(request, "project.html", {'images':images , "projects":all_projects, "top":top_two})