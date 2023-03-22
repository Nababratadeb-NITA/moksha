from django.db import models

# Create your models here.
class SoloContestRegistrations(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.CharField(max_length=100, blank=True, null=True)
    contest_slug = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user_id

class TeamContestRegistrations(models.Model):
    id = models.AutoField(primary_key=True)
    team_id = models.CharField(max_length=100, blank=True, null=True)
    contest_slug = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.team_id
