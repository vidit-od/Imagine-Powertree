# Generated by Django 4.1.7 on 2023-02-19 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_key_clients_supported_by_alter_reserve_i_am'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='sub_text',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Residentail Customer', 'Residentail Customer'), ('Reseller', 'Reseller'), ('Commercial Customer', 'Commercial Customer')], max_length=30),
        ),
    ]