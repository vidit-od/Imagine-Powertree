# Generated by Django 4.1.7 on 2023-02-19 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0016_products_sub_text_alter_reserve_i_am'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Residentail Customer', 'Residentail Customer'), ('Commercial Customer', 'Commercial Customer'), ('Reseller', 'Reseller')], max_length=30),
        ),
    ]