from django.contrib import admin
from django.forms import TextInput, Textarea
from django.db import models
from .models import calculator_query


admin.site.register(calculator_query)