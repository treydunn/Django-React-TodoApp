# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime

from django.db import models

class Todo(models.Model):
    # create fields
    title = models.CharField(max_length=200)
    complete = models.BooleanField(default=False)
    text = models.TextField()
    created_at = models.DateTimeField(default=datetime.now, blank=True) # set datetime to default

    def __str__(self):
        return self.title
