from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class reserve(models.Model):
    i_am_choice={
        ('Commercial Customer',"Commercial Customer"),
        ("Residentail Customer","Residentail Customer"),
        ("Reseller","Reseller")
    }
    query_id=models.AutoField
    i_am=models.CharField(max_length=30,blank=False,choices=i_am_choice)
    name=models.CharField(max_length=100,blank=False,null=False)
    email=models.EmailField(max_length=100,null=False,blank=False,unique=False)
    contact=PhoneNumberField(null=False,blank=False,unique=False)
    address_ln1=models.CharField(max_length=100,blank=False,null=False)
    address_ln2=models.CharField(max_length=100,blank=True,null=True)
    state=models.CharField(max_length=50,blank=False,null=False)
    comment=models.CharField(max_length=500,blank=True,null=True,default=None)

    def __str__(self):
        return '%s || %s || %s' %(self.name,self.contact, self.pk)

class why_powertree(models.Model):
    industry_problem =models.CharField(max_length=100,blank=False,null=False)
    traditional_approach = models.CharField(max_length=100,blank=False,null=False)
    powertree_approach = models.CharField(max_length=100,blank=False,null=False)
    traditional_image = models.ImageField(upload_to='why_powertree/', height_field=None, width_field=None, max_length=100,blank=False,null=False)
    powertree_image = models.ImageField(upload_to='why_powertree/', height_field=None, width_field=None, max_length=100,blank=False,null=False)

    def __str__(self):
        return '%s' %(self.industry_problem)
