# Generated by Django 4.1.7 on 2023-02-19 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_projects_year_of_project_alter_reserve_i_am'),
    ]

    operations = [
        migrations.CreateModel(
            name='key_clients',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to='key_clients/')),
            ],
        ),
        migrations.CreateModel(
            name='supported_by',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to='supported_by/')),
            ],
        ),
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Commercial Customer', 'Commercial Customer'), ('Residentail Customer', 'Residentail Customer'), ('Reseller', 'Reseller')], max_length=30),
        ),
    ]
