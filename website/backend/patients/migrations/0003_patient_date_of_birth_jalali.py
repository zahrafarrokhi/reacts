# Generated by Django 3.2.6 on 2021-08-24 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0002_auto_20210816_0910'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='date_of_birth_jalali',
            field=models.CharField(blank=True, default='', max_length=16, null=True),
        ),
    ]
