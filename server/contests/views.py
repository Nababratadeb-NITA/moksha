from rest_framework.exceptions import AuthenticationFailed
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseNotFound
from .serializers import *
from .models import *
from login.models import *
from login.serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
import secrets
import string
import jwt
events = {'E-1': ["dance", 3], 'E-2': ["singing", 2],
          'E-3': ["drama", 5], 'E-4': ["acting", 1]}

# SOLO CONTEST APIs

class CheckSoloRegistration(APIView):
    def get(self, request, contest_slug):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated')
        try:
            payload = jwt.decode(token, 'secret00', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token Expired! Log in again.')

        user = User.objects.filter(user_id=payload['id']).first()

        if user:
            solo_registration = SoloContestRegistrations.objects.filter(
                user_id=user.user_id, contest_slug=contest_slug).first()
            if solo_registration:
                return Response({'registered': True}, status=200)
            return Response({'registered': False}, status=200)

        return Response({'message': 'User not found!'}, status=404)

class SoloContestRegister(APIView):
    def post(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated')
        try:
            payload = jwt.decode(token, 'secret00', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token Expired! Log in again.')

        user = User.objects.filter(user_id=payload['id']).first()
        contest_slug = str(request.data.get('contest_slug'))

        if not contest_slug:
            return Response({'message': 'No contest_slug provided.'}, status=400)

        if user:
            user_solo = SoloContestRegistrations.objects.filter(
                user_id=user.user_id, contest_slug=contest_slug).first()
            if user_solo:
                return Response({'message': "User already registered for the contest."}, status=409)
            format_data = {'user_id': user.user_id, 'contest_slug': contest_slug}
            serializer = SoloContestSerializers(data=format_data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'message': 'User registered successfully for contest.'}, status=201)

        return Response({'message': 'User not found.'}, status=404)

class CancelSoloRegistration(APIView):
    def delete(self, request, contest_slug):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated')
        try:
            payload = jwt.decode(token, 'secret00', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token Expired! Log in again.')

        user = User.objects.filter(user_id=payload['id']).first()

        if user:
            solo_registration = SoloContestRegistrations.objects.filter(
                user_id=user.user_id, contest_slug=contest_slug).first()
            if solo_registration:
                solo_registration.delete()
                return Response({'message': 'Registration for this contest has been cancelled.'}, status=200)
            return Response({'message': 'No registration found for this contest.'}, status=404)

        return Response({'message': 'User not found!'}, status=404)

# SOLO CONTEST APIs

# class TeamContestRegister(APIView):
#     def post(self, request):
#         token = request.COOKIES.get('jwt')

#         if not token:
#             raise AuthenticationFailed('Unauthenticated')
#         try:
#             payload = jwt.decode(token, 'secret00', algorithms=['HS256'])
#         except jwt.ExpiredSignatureError:
#             raise AuthenticationFailed('Token Expired! Log in again.')

#         user = User.objects.filter(user_id=payload['id']).first()
#         contest_slug = request.data.get('contest_slug')
#         team = Team.objects.filter(leader=user.user_id).first()

#         if user:
#             user_solo = TeamContestRegistrations.objects.filter(
#                 team_id=team.team_id, contest_slug=contest_slug).first()
#             if user_solo:
#                 return Response({'message': "Team already registered for the contest!"}, status=409)
#             format_data = {'team_id': team.team_id, 'contest_slug': contest_slug}
#             serializer = TeamContestDetailsSerializers(data=format_data)
#             serializer.is_valid(raise_exception=True)
#             serializer.save()
#             return Response({'message': 'User registered successfully!!'}, status=201)

#         return Response({'message': 'User not found!'}, status=404)
