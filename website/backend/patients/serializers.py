from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework_gis.fields import GeometryField
from django.utils.translation import gettext_lazy as _
from .models import Patient, Address
from constant_data.models import City
from django.conf import settings
import datetime


class PatientOnlyNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'first_name', 'last_name']


class PatientSerializer(serializers.ModelSerializer):
    #  nationalId = serializers.CharField(source="national_id")
    #  dateOfBirth = serializers.CharField(source="date_of_birth")
    #  dateOfBirthJalali = serializers.CharField(source="date_of_birth_jalali")

    class Meta:
        model = Patient
        fields = '__all__'
        read_only_fields = ['user']
        #  read_only_fields = (['user', 'national_id', 'first_name',
        #                      'last_name', 'date_of_birth', 'date_of_birth_jalali', 'gender'])
        #  read_only_fields = (['user', 'national_id', 'first_name',
        #                      'last_name', 'date_of_birth', 'date_of_birth_jalali', 'gender']
        #                      if getattr(settings, 'NATIONAL_DATABASE_KEY', None) is
        #                      not None else
        #                      ['user', 'national_id', 'date_of_birth'])
        extra_kwargs = {'first_name': {'required': False}, 'last_name': {
            'required': False}, 'gender': {'required': False}}

    def validate(self, data):
        print(data)
        if len(data.get('national_id', '')) != 10:
            print(data.get('national_id', ''),
                  len(data.get('national_id', '')))
            msg = _("Invalid national id")
            raise serializers.ValidationError(msg)

        try:
            data['org_date_of_birth'] = data.get('date_of_birth')
            if isinstance(data['date_of_birth'], str):
                data['date_of_birth'] = datetime.datetime.strptime(
                    data.get('date_of_birth'),
                    '%Y-%m-%d').date()
        except ValueError:
            msg = _("Invalid birthday")
            raise serializers.ValidationError(msg)

        return data

    def update(self, instance, validated_data):
        print(instance, validated_data)
        if getattr(settings, 'NATIONAL_DATABASE_KEY', None) is not None:
            if validated_data.get('city', None) is not None:
                instance.city = validated_data.get(
                    'city', instance.city)
                # instance.has_social_security_insurance = validated_data.get(
                #     'has_social_security_insurance', instance.has_social_security_insurance)
                instance.insurance = validated_data.get(
                    'insurance', instance.insurance)
                instance.supplementary_insurance = validated_data.get(
                    'supplementary_insurance', instance.supplementary_insurance)
                instance.save()
        else:
            instance.city = validated_data.get(
                'city', instance.city)
            instance.first_name = validated_data.get(
                'first_name', instance.first_name)
            instance.last_name = validated_data.get(
                'last_name', instance.last_name)
            instance.gender = validated_data.get(
                'gender', instance.gender)
            # instance.has_social_security_insurance = validated_data.get(
            #     'has_social_security_insurance', instance.has_social_security_insurance)
            instance.insurance = validated_data.get(
                'insurance', instance.insurance)
            instance.supplementary_insurance = validated_data.get(
                'supplementary_insurance', instance.supplementary_insurance)
            instance.save()

        #  user = CurrentUserDefault()

        #  if not user.phone_number:
        #      user.phone_number = validated_data.get('phone_number')
        #      user.save()
        #  if not user.email:
        #      user.email = validated_data.get('email')
        #      user.save()

        return instance

    def create(self, validated_data):
        user = self.context['request'].user
        patient = Patient(
            user=user,
            national_id=validated_data.get('national_id'),
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            date_of_birth=validated_data.get('date_of_birth'),
            date_of_birth_jalali=validated_data.get('date_of_birth_jalali'),
            gender=validated_data.get('gender'),
            city=validated_data.get('city'),
        )

        patient.save()

        #  if not user.phone_number:
        #      user.phone_number = validated_data.get('phone_number')
        #      user.save()
        #  if not user.email:
        #      user.email = validated_data.get('email')
        #      user.save()

        return patient


class AddressSerializer(serializers.ModelSerializer):
    # location = GeometryField()
    class Meta:
        model = Address
        geo_field = "location"
        fields = '__all__'
        read_only_fields = ['user']

    def create(self, validated_data):
        user = self.context['request'].user
        address = Address(
            user=user,
            **validated_data)
        address.save()
        return address
