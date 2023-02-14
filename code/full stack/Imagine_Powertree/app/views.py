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