# Generated by Django 4.1.7 on 2023-03-15 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0039_alter_reserve_i_am'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='desc',
            field=models.TextField(default='We are updating information regarding this project soon', max_length=20000),
        ),
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Reseller', 'Reseller'), ('Commercial Customer', 'Commercial Customer'), ('Residentail Customer', 'Residentail Customer')], max_length=30),
        ),
    ]
