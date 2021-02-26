from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView


class IndexView(ListView):
    template_name = 'index.html'