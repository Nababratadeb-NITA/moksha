# Generated by Django 4.1.6 on 2023-02-14 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solo_events', '0005_rename_teamdetails_teamdetail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teamdetail',
            name='count',
            field=models.IntegerField(default=0),
        ),
    ]
