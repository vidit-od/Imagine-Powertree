# Generated by Django 4.1.7 on 2023-02-17 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_image_gallery_title_alter_reserve_i_am'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Reseller', 'Reseller'), ('Residentail Customer', 'Residentail Customer'), ('Commercial Customer', 'Commercial Customer')], max_length=30),
        ),
    ]
