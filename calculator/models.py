from django.db import models
from django.conf import settings
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.


class calculator_query(models.Model):
    contact=PhoneNumberField(null=False,blank=False,unique=False)
    visited=models.BooleanField(null=False,blank=False,default=False)

    def __str__(self):
        return '%s || %s' %(self.contact,self.visited)