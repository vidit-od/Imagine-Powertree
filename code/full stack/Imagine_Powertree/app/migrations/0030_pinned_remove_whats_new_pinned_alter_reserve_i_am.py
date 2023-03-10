# Generated by Django 4.1.7 on 2023-02-23 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0029_alter_reserve_i_am'),
    ]

    operations = [
        migrations.CreateModel(
            name='pinned',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=10)),
            ],
        ),
        migrations.RemoveField(
            model_name='whats_new',
            name='pinned',
        ),
        migrations.AlterField(
            model_name='reserve',
            name='i_am',
            field=models.CharField(choices=[('Residentail Customer', 'Residentail Customer'), ('Commercial Customer', 'Commercial Customer'), ('Reseller', 'Reseller')], max_length=30),
        ),
    ]
