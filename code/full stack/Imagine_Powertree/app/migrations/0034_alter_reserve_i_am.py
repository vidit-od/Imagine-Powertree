# Generated by Django 4.1.7 on 2023-02-25 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0033_alter_varient_varient_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Reseller', 'Reseller'), ('Residentail Customer', 'Residentail Customer'), ('Commercial Customer', 'Commercial Customer')], max_length=30),
        ),
    ]
