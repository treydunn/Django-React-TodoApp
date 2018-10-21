# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Bring in our models
from .models import Todo

admin.site.register(Todo)
