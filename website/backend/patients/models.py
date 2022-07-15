from django.contrib.contenttypes.fields import GenericRelation
from django.contrib.gis.db import models as gis_models
from django.db import models

from authentication.models import User


class Patient(models.Model):
    user = models.ForeignKey(
        User, null=False, blank=False, on_delete=models.CASCADE)
    national_id = models.CharField(
        max_length=12, null=False, blank=False, unique=True)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    date_of_birth = models.DateField()
    date_of_birth_jalali = models.CharField(max_length=16, blank=True, null=True,
                                            default="")
    MALE = 'm'
    FEMALE = 'f'
    GENDER_TYPES = ((MALE, 'male'), (FEMALE, 'female'))
    gender = models.CharField(max_length=1, choices=GENDER_TYPES)
    city = models.ForeignKey('constant_data.City', on_delete=models.CASCADE,
                             null=True, blank=True)

    # has_social_security_insurance = models.BooleanField(null=True, blank=True)
    INS_TAMIN = 'tamin'
    INS_SALAMAT = 'salamat'
    INS_MOSALAH = 'mosalah'
    INS_OTHER = 'other'
    INS_NONE = 'none'
    INSURANCES = (
        (INS_TAMIN, 'tamin'),
        (INS_SALAMAT, 'salamat'),
        (INS_MOSALAH, 'mosalah'),
        (INS_OTHER, 'other'),
        (INS_NONE, 'none'),
    )
    insurance = models.CharField(choices=INSURANCES, max_length=20, default=INS_NONE)
    supplementary_insurance = models.ForeignKey('constant_data.SupplementaryInsurance', on_delete=models.SET_NULL,
                                                null=True, blank=True)

    rocket_chat = GenericRelation('chat.RocketChatToken', related_query_name="patient",
                                  content_type_field='refrence_type', object_id_field='refrence_id')
    last_used_doctor = models.ForeignKey(
        User, null=True, blank=True, related_name="last_used_doctor", on_delete=models.SET_NULL)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self):
        return f"{self.first_name} {self.last_name}({self.national_id}, {self.id}, {self.user})"


class Address(models.Model):
    user = models.ForeignKey(
        User, null=False, blank=False, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, blank=True, null=True)
    address = models.TextField(null=False, blank=False)
    postal_code = models.CharField(max_length=20)
    reciever = models.CharField(max_length=64)
    phone_number = models.CharField(max_length=16)
    location = gis_models.PointField()

    def __str__(self):
        return f"{self.name} {self.postal_code} ({self.phone_number}, {self.user})"
