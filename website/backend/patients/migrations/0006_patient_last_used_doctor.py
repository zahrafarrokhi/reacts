# Generated by Django 3.2.6 on 2021-09-29 13:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('patients', '0005_rename_phonenumber_address_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='last_used_doctor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='last_used_doctor', to=settings.AUTH_USER_MODEL),
        ),
    ]
