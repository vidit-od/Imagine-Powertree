# Generated by Django 4.1.7 on 2023-03-15 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0037_remove_projects_location_projects_capacity_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projects',
            name='space_saved',
        ),
        migrations.AddField(
            model_name='projects',
            name='features',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]