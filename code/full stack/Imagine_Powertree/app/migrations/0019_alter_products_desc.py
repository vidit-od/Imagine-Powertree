# Generated by Django 4.1.7 on 2023-02-19 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0018_alter_products_name_alter_products_sub_text_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='desc',
            field=models.TextField(default='product descriptions', max_length=2000),
        ),
    ]
