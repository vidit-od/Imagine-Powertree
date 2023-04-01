# Generated by Django 4.1.7 on 2023-03-10 06:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0035_alter_advisory_board_image_alter_reserve_i_am'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Reseller', 'Reseller'), ('Residentail Customer', 'Residentail Customer'), ('Commercial Customer', 'Commercial Customer')], max_length=30),
        ),
        migrations.AlterField(
            model_name='whats_new',
            name='desc',
            field=models.TextField(max_length=20000),
        ),
    ]