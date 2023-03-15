# Generated by Django 4.1.7 on 2023-03-15 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0036_alter_reserve_i_am_alter_whats_new_desc'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projects',
            name='location',
        ),
        migrations.AddField(
            model_name='projects',
            name='capacity',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='projects',
            name='space_saved',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Residentail Customer', 'Residentail Customer'), ('Reseller', 'Reseller'), ('Commercial Customer', 'Commercial Customer')], max_length=30),
        ),
    ]
