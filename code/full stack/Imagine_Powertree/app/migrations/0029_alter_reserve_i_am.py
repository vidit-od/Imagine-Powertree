# Generated by Django 4.1.7 on 2023-02-23 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0028_alter_reserve_i_am'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Commercial Customer', 'Commercial Customer'), ('Reseller', 'Reseller'), ('Residentail Customer', 'Residentail Customer')], max_length=30),
        ),
    ]
