# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer

# import our model Todo
from .models import Todo
import json, ast
import datetime
from django.core import serializers

def index(request):
    # display todo items
    todos = Todo.objects.all()
    context = {
        'todos': todos
    }
    return render(request, 'index.html', context)

def add(request):
    print('[Adding New Todo Item]')
    data = json.loads(request.body.decode('utf-8'))
    # removing unicodes
    data = ast.literal_eval(json.dumps(data))
    title = data['title']
    text = data['text']
    todo = Todo(title=title, text=text)
    # save the todo
    todo.save()
    return HttpResponse(todo)

def delete(request, todo_id):
    print('[Delete]', todo_id)
    data = todo_id.encode("utf-8").replace("/", "").decode('utf-8')
    print(data, type(data))
    query = Todo.objects.get(id=data)
    query.delete()
    return HttpResponse('Deleted Success!')
    # return redirect('/todos')

def complete(request, todo_id):
    todo = Todo.objects.get(id=todo_id)
    todo.complete = True
    todo.save()
    return redirect('/todos')

def getItems(request):
    items = (Todo.objects.all().values('id', 'title', 'text', 'complete'))
    r = JSONRenderer()
    data = r.render(items)
    return HttpResponse(data)

def current_datetime(request):
    now = datetime.datetime.now().strftime('%d-%m-%Y')
    return HttpResponse(json.dumps(now))
