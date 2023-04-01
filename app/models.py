from django.db import models
from django.conf import settings
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

class team(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    role = models.CharField(max_length=100, blank=False, null=False)
    desc = models.CharField(max_length=200, blank=True, null=True)
    user_id =models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    linkedin = models.URLField(max_length=100, blank=True, null=True)
    instagram = models.URLField(max_length=100, blank=True, null=True)
    twitter = models.URLField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='team/',  height_field=None, width_field=None ,blank=False ,null=False)

    def __str__(self):
        return '%s | %s' %(self.name, self.role)

class advisory_board(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    role = models.CharField(max_length=100, blank=False, null=False)
    desc = models.CharField(max_length=200, blank=True, null=True)
    linkedin = models.URLField(max_length=100, blank=True, null=True)
    instagram = models.URLField(max_length=100, blank=True, null=True)
    twitter = models.URLField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='advisory/',  height_field=None, width_field=None ,blank=False ,null=False)

    def __str__(self):
        return '%s | %s' %(self.name, self.role)

class products(models.Model):
    name = models.CharField(max_length=40, blank=False, null=False)
    image = models.ImageField(upload_to='products/',  height_field=None, width_field=None ,blank=False ,null=False)
    sub_text = models.CharField(max_length=180, blank=True, null=True)
    desc = models.TextField(max_length=2000 , blank=False, null=False ,default="product descriptions")

    def __str__(self):
        return '%s' %(self.name)

class image_gallery(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False, default='Title')
    desc = models.CharField(max_length=200, blank=True, null=True)
    image = models.ImageField(upload_to='image_gallery/',  height_field=None, width_field=None ,blank=False ,null=False)

    def __str__(self):
        return '%s' %(self.desc)

class projects(models.Model):
    project_name = models.CharField(max_length=200, blank=False, null=False)
    image = models.ImageField(upload_to='projects/',  height_field=None, width_field=None ,blank=False ,null=False)
    desc = models.TextField(max_length=20000, blank=False, null=False, default="We are updating information regarding this project soon")
    year_of_project = models.IntegerField(blank=True,null=True)
    capacity = models.IntegerField(blank=True,null=True)
    features = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return '%s' %(self.project_name)

class products_usedin_project(models.Model):
    products_id = models.ForeignKey(products, on_delete=models.CASCADE)
    project_id = models.ForeignKey(projects, on_delete=models.CASCADE)
    quantity = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return '%s | %s' %(self.project_id, self.products_id)

class key_clients(models.Model):
    name = models.CharField(max_length=200, blank=False,null=False)
    image = models.ImageField(upload_to='key_clients/',  height_field=None, width_field=None ,blank=False ,null=False)

    def __str__(self):
        return '%s' %(self.name)

class supported_by(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False)
    image = models.ImageField(upload_to='supported_by/',  height_field=None, width_field=None ,blank=False ,null=False)

    def __str__(self):
        return '%s' %(self.name)
        
class varient(models.Model):
    product_id = models.ForeignKey(products, on_delete=models.CASCADE)
    varient_name = models.CharField(max_length=100, blank=False, null=False, unique=False)
    desc = models.FileField(upload_to="varients/")

    def __str__(self):
        return "%s | %s" %(self.product_id, self.varient_name)

class pinned(models.Model):
    title = models.CharField(max_length=10)

    def __str__(self):
        return "%s" %(self.title)
        
class whats_new(models.Model):
    title = models.CharField(max_length=100,blank=False,null=False, unique=True)
    date = models.DateField()
    desc = models.TextField(max_length=20000, blank=False,null=False)
    image = models.ImageField(upload_to="whats_new/")
    top = models.OneToOneField(pinned, on_delete=models.CASCADE ,blank=True, null=True)

    def __str__(self):
        return "%s " %(self.title )
