from django.contrib import admin
from django.forms import TextInput, Textarea
from django.db import models
from .models import reserve,why_powertree,team,advisory_board,products,image_gallery,projects,products_usedin_project,key_clients,supported_by,varient,whats_new
# Register your models here.

class YourModelAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size':'100'})},
        models.TextField: {'widget': Textarea(attrs={'rows':10, 'cols':100})},
    }


admin.site.register(reserve)
admin.site.register(why_powertree)
admin.site.register(team)
admin.site.register(advisory_board)
admin.site.register(products, YourModelAdmin)
admin.site.register(image_gallery)
admin.site.register(projects)
admin.site.register(products_usedin_project)
admin.site.register(key_clients)
admin.site.register(supported_by)
admin.site.register(varient)
admin.site.register(whats_new)

