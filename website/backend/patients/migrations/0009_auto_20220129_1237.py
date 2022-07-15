# Generated by Django 3.2.6 on 2022-01-29 12:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('constant_data', '0003_supplementaryinsurance'),
        ('patients', '0008_merge_20211218_1002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='last_used_doctor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='last_used_doctor', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='patient',
            name='supplementary_insurance',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='constant_data.supplementaryinsurance'),
        ),
    ]