import factory.fuzzy

from authentication.models import User
from doctors import models as doctor_models
from doctors.models import Doctor, DoctorsOffices


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    address = factory.Faker('address')
    phone_number = factory.Sequence(lambda n: "090%08d" % n)
    # type = factory.fuzzy.FuzzyChoice(["doctor", "patients"])
    type = factory.fuzzy.FuzzyChoice(["doctor"])


class DepartmentFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = doctor_models.Department

    name = factory.Faker('name')
    faname = factory.Faker('name')


class DoctorFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Doctor

    user = factory.Iterator(User.objects.filter(type="doctor"))
    department = factory.fuzzy.FuzzyChoice(doctor_models.Department.objects.all())
    description = factory.Faker('postalcode')
    national_id = factory.Faker('postalcode')
    first_name = factory.Faker('name')
    last_name = factory.Faker('name')
    degree = factory.fuzzy.FuzzyChoice(doctor_models.Doctor.DEGREES, lambda x: x[1])
    medicalCode = factory.Faker('postalcode')
    phone = factory.Sequence(lambda n: "090%08d" % n)
    city = factory.fuzzy.FuzzyChoice(doctor_models.City.objects.all())


class DoctorsOfficesFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = DoctorsOffices

    user = factory.Iterator(User.objects.filter(type="doctor"))
    location = "SRID=4326;POINT (52.51838594320962 35.18723406764331)"
    address = factory.Faker('address')
    open_hours = factory.Faker('postalcode')
    postal_code = factory.Faker('postalcode')
    phone_number = factory.Iterator(Doctor.objects.all(), True, lambda x: x.phone)


def creator(fac, size=10, name="obj"):
    for i in range(size):
        print(f"making {name} {i + 1}")
        try:
            fac.create()
        except:
            print(f"error on {i+1}")


def run():
    print("injecting data...")
    creator(UserFactory, 100)
    print("done user")
    creator(DepartmentFactory, 5)
    print("done departments")
    creator(DoctorFactory, 80)
    print("done doctors")
    creator(DoctorsOfficesFactory, 60)
    print("done offices")
