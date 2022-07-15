import datetime

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from chat.models import RocketChatToken
from patients import models
from patients.models import Patient
from patients.views import PATIENTS


class PatientTests(APITestCase):
    fixtures = ['all.json']

    def test_create_patient(self):
        patient_obj = Patient.objects.all()[0]
        self.client.force_authenticate(user=patient_obj.user)

        url = reverse('patients-list')

        response = self.client.post(url, {
            "national_id": "0079317200",
            "date_of_birth": datetime.datetime.now().date().strftime("%Y-%m-%d")
        })

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        patient = response.json()
        self.assertEqual(patient.get("first_name", None), "هادی")
        self.assertEqual(patient.get("last_name", None), "کیان‌ارثی")
        self.assertEqual(patient.get("gender", None), Patient.MALE)

    def test_rocketchat_object_existence_after_patient_creation(self):
        patient_obj = Patient.objects.all()[0]
        self.client.force_authenticate(user=patient_obj.user)

        url = reverse('patients-list')

        response = self.client.post(url, {
            "national_id": "0024032468",
            "date_of_birth": datetime.datetime.now().date().strftime("%Y-%m-%d")
        })

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        patient = response.json()
        self.assertTrue(RocketChatToken.objects.filter(refrence_id=patient.get("id", None)).exists())

    def test_wrong_national_id_and_date_of_birth(self):
        patient_obj = Patient.objects.all()[0]
        self.client.force_authenticate(user=patient_obj.user)

        url = reverse('patients-list')

        response = self.client.post(url, {
            "national_id": "1337",
            "date_of_birth": datetime.datetime.now().date().strftime("%Y-%m-%d")
        })

        self.assertNotEqual(response.status_code, status.HTTP_201_CREATED)

        response = self.client.post(url, {
            "national_id": "2739944586",
            "date_of_birth": "chert"
        })

        self.assertNotEqual(response.status_code, status.HTTP_201_CREATED)

    def test_fields_that_should_not_update(self):
        patient_obj: Patient = Patient.objects.all()[0]
        self.client.force_authenticate(user=patient_obj.user)
        url = reverse('patients-detail', kwargs={'pk': patient_obj.id})
        response = self.client.put(url, {
            "national_id": "1234567891",
            "date_of_birth": "2021-10-26",
            "first_name": "asghar",
            "last_name": "akbar",
            "gender": "m",
        })
        update_result = response.json()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(patient_obj.national_id, update_result.get("national_id", None))
        self.assertEqual(patient_obj.date_of_birth.strftime("%Y-%m-%d"), update_result.get("date_of_birth", None))
        # self.assertEqual(patient_obj.first_name, update_result.get("first_name", None))
        # self.assertEqual(patient_obj.last_name, update_result.get("last_name", None))
        # self.assertEqual(patient_obj.gender, update_result.get("gender", None))
