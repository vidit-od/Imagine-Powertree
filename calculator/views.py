from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
import os

def calculator(request):
    return render(request, 'calculator.html')